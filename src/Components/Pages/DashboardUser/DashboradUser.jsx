import React, { Component } from 'react';
import Navbar from "../../Elements/Navbar/Navbar";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import axios from 'axios';
import {API_HOST} from '../../../varenv';
import moment from "moment";
import 'moment/locale/es';
import UnAuthImg from "../../../Imgs/403.png"
import Button from 'react-bootstrap/Button'

import {
    GridComponent,
    ColumnDirective,
    ColumnsDirective,
    Page,
    Filter,
    Inject,
    FilterSettingsModel,
    EditSettingsModel,
    Grid,
    Toolbar, 
    Edit,
    DataStateChangeEventArgs
  } from '@syncfusion/ej2-react-grids';


if (window.sessionStorage.getItem('SuccessUser')){
    
}
class MedicamentosHome extends Component{

    state = { 
        data_tabla_medicamento: [],
        data_tabla_citas: [],
        action: [],

        showAnadirMedicamento:  false,
        showEliminarMedicamento: false,
        shworActualizarMedicamento: false,

        idMed:'',
        tipoMed:'',
        nomMed:'',
        DesMed:'',
        precioMed:'',
        provMed:'',
        stcMed:'',

    };

    componentDidMount = () =>{
        this.Consultar_Citas_Medicamentos()
    }

    SetStateDatosCitasMedicamentos = (dataMed,dataCitas) => {
        this.setState({ data_tabla_medicamento: dataMed });
        this.setState({ data_tabla_citas: dataCitas });
        console.log(this.state);
    };

    Consultar_Citas_Medicamentos = () =>{
        Promise.all([
            axios.get(`${API_HOST}/api/medicamentos`),
            axios.get(`${API_HOST}/api/agendarCitas`)
        ]).then(([rp1,rp2])=>{
            console.log(rp1)
            console.log(rp2)
            var dataMed = rp1.data.data.map((a, indice) => ({ ...a, Id: indice + 1 }))
            var dataCitas = rp2.data.data.map((a, indice) => ({ ...a, Id: indice + 1 }))
            this.SetStateDatosCitasMedicamentos(dataMed,dataCitas)
        }).catch((err)=>{
            console.log(err)
            alert("No se ha podido obetener los datos de los medicamentos por favor ponerse en contanto con un agente.");
        })
    }

    dataSourceChanged = () => {
        console.log(this.state)
    }

    handleShowAnadirMedicamento = () => {
        this.setState({ showAnadirMedicamento: true });
    };

    handleCloseAnadirMedicamento = () => {
        this.setState({ showAnadirMedicamento: false });
    };

    handleShowEliminarrMedicamento = () => {
        this.setState({ showEliminarMedicamento: true });
    };

    handleCloseEliminarMedicamento = () => {
        this.setState({ showEliminarMedicamento: false });
    };

    handleShowActualizarMedicamento = () => {
        this.setState({ shworActualizarMedicamento: true });
    };

    handleCloseActualizarMedicamento = () => {
        this.setState({ shworActualizarMedicamento: false });
    };

    handleChangeMedicamento(event) {
        const { name, value } = event.target
        this.setState({[name]: value })
        console.log(this.state);
    }

    AnadirMedicamentos = () =>{
        this.handleCloseAnadirMedicamento();

        console.log(this.state);

        const {
            tipoMed,
            nomMed,
            DesMed,
            precioMed,
            provMed,
            stcMed,
        } = this.state;

        const PostMedicamentos ={
            tipo_medicamento: tipoMed,
            nombre_medicamento: nomMed,
            descripcion_med: DesMed,
            precio_med: precioMed,
            proveedor: provMed,
            stock_med:stcMed
        }

        console.log(API_HOST)
        
        Promise.all([
            axios.post(`${API_HOST}/api/medicamentos`,PostMedicamentos)
        ]).then(()=>{
            alert("Medicamento ha sido agregados exitosamente");
        }).catch((err)=>{
            alert("No se ha podido agregar el medicamentos");
        })
    }

    EliminarMedicamentos = () =>{
        this.handleCloseEliminarMedicamento();

        console.log(this.state);

        const {idMed} = this.state;

        const EliminarMed ={
            id: idMed,
        }

        console.log(API_HOST)
        
        Promise.all([
            axios.put(`${API_HOST}/api/medicamentos`,EliminarMed)
        ]).then(()=>{
            alert("El medicamento se ha eliminado correctamente");
        }).catch((err)=>{
            alert("No se ha podido elimar el medicamento");
        })
    }

    ActualizarMedicamentos = () =>{
        this.handleCloseActualizarMedicamento();

        console.log(this.state);
        
        const {
            idMed,
            tipoMed,
            nomMed,
            DesMed,
            precioMed,
            provMed,
            stcMed,
        } = this.state;
        
        const ActMed ={
            id: idMed,
            tipo_medicamento: tipoMed,
            nombre_medicamento: nomMed,
            descripcion_med: DesMed,
            precio_med: precioMed,
            proveedor: provMed,
            stock_med:stcMed
        }

        console.log(API_HOST)
        
        Promise.all([
            axios.put(`${API_HOST}/api/medicamentos/med`,ActMed)
        ]).then(()=>{
            alert("El medicamento se ha actualizado correctamente");
        }).catch((err)=>{
            alert("No se ha podido actualizar el medicamento");
        })
    }

    render(){
        const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        const toolbarOptions = ['Add', 'Edit', 'Delete'];

        if(!window.sessionStorage.getItem('SuccessUser')){
            return(
                <div className="w-100 o-container-info-api h-100 m-0 p-0">
                    <Navbar />
                        <img src={UnAuthImg} alt="Background of a City"  className="unAuthImg"  />
                        <img src={UnAuthImg} alt="Background of a City"  className="unAuthImg"  />
                </div>
            )
        }
        else if(window.sessionStorage.getItem('SuccessUser')){
            return(
                <div className="w-100 o-container-info-api h-100 m-0 p-0">
                    <Navbar />
                    <div className="TabsDasboardUser">
    
                        <Tabs defaultActiveKey="CA" transition={false} id="noanim-tab-example">
                            <Tab eventKey="CA" title="Citas agendadas">
                                <div className="CuadroMedicamento">
                                    <GridComponent dataSource={this.state.data_tabla_citas}
                                        allowPaging={true}
                                        allowFiltering={true}
                                        pageSettings={{ pageSize: 6 }}
                                        allowTextWrap={true}
                                    >
                                        <ColumnsDirective>
                                            <ColumnDirective field='tipo_id' headerText='Tipo de documentos' width='100' isPrimaryKey={true} />
                                            <ColumnDirective field='num_id' headerText='Número de identidad' width='150' />
                                            <ColumnDirective field='eps' headerText='EPS' width='150' />
                                            <ColumnDirective field='email' headerText='Correo electrónico' width='150'/>
                                            <ColumnDirective field='fecha_cita' headerText='Fecha cita' width='150'/>
                                            <ColumnDirective field='estado_cita' headerText='Estado' width='150'/>
                                        </ColumnsDirective>
                                        <Inject services={[Page, Filter]} />
                                    </GridComponent>
                                </div>
                            </Tab>

                            <Tab eventKey="LM" title="Lista de medicamentos">
                                <br/>
                                <Button variant="outline-success" type="submit" onClick={this.handleShowAnadirMedicamento} >
                                    Añadir
                                </Button>
                                <Button variant="outline-danger" type="submit" onClick={this.handleShowEliminarrMedicamento} >
                                    Eliminar
                                </Button>
                                <Button variant="outline-primary" type="submit" onClick={this.handleShowActualizarMedicamento}>
                                    Editar
                                </Button>
                                <div className="CuadroMedicamento">
                                    <GridComponent dataSource={this.state.data_tabla_medicamento}
                                        allowPaging={true}
                                        allowFiltering={true}
                                        pageSettings={{ pageSize: 6 }}
                                        allowTextWrap={true}
                                        editSettings={editSettings}
                                        toolbar={toolbarOptions}
                                        dataSourceChanged={this.dataSourceChanged()}
                                        
                                    >
                                        <ColumnsDirective>
                                        <ColumnDirective field='id' headerText='ID' width='100' isPrimaryKey={true} />
                                            <ColumnDirective field='tipo_medicamento' headerText='Tipo' width='100' allowEditing={true} />
                                            <ColumnDirective field='nombre_medicamento' headerText='Nombre' width='150' allowEditing={true} />
                                            <ColumnDirective field='descripcion_med' headerText='Descripción' width='150'  allowEditing={true}/>
                                            <ColumnDirective field='precio_med' headerText='Precio' width='150' allowEditing={true}/>
                                            <ColumnDirective field='proveedor' headerText='Proveedor' width='150' allowEditing={true}/>
                                            <ColumnDirective field='stock_med' headerText='Stock' width='150' allowEditing={true}/>
                                        </ColumnsDirective>
                                        <Inject services={[Page, Filter]} />
                                    </GridComponent>
                                </div>
                            </Tab>
                        </Tabs>  
                    </div>

                    <Modal show={this.state.showAnadirMedicamento} onHide={this.handleCloseAnadirMedicamento}>
                        <Modal.Header closeButton>
                        <Modal.Title>Añadir un nuevo medicamento</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form noValidate>
                                <Form.Label>Tipo de medicamento</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="tipoMed"
                                    value={this.state.NumID}
                                    onChange={eve => this.handleChangeMedicamento(eve)}
                                    isInvalid={this.state.NumID === ''}
                                />
                                <br/>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nomMed"
                                    value={this.state.NumID}
                                    onChange={eve => this.handleChangeMedicamento(eve)}
                                    isInvalid={this.state.NumID === ''}
                                />
                                <br/>
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="DesMed"
                                    value={this.state.FechaRetiroMedicamento}
                                    onChange={eve => this.handleChangeMedicamento(eve)}
                                    isInvalid={this.state.FechaRetiroMedicamento === ''}
                                />
                                <br/>
                                <Form.Label>Precio</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="precioMed"
                                    value={this.state.FechaRetiroMedicamento}
                                    onChange={eve => this.handleChangeMedicamento(eve)}
                                    isInvalid={this.state.FechaRetiroMedicamento === ''}
                                />
                                <br/>
                                <Form.Label>Proveedor</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="provMed"
                                    value={this.state.FechaRetiroMedicamento}
                                    onChange={eve => this.handleChangeMedicamento(eve)}
                                    isInvalid={this.state.FechaRetiroMedicamento === ''}
                                />
                                <br/>
                                <Form.Label>Stock</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="stcMed"
                                    value={this.state.FechaRetiroMedicamento}
                                    onChange={eve => this.handleChangeMedicamento(eve)}
                                    isInvalid={this.state.FechaRetiroMedicamento === ''}
                                />
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        <button className="btn btn-danger p-3 rounded" onClick={this.handleCloseAnadirMedicamento}>
                            Cerrar
                        </button>
                        <button className="btn btn-success p-3 rounded" type="submit" onClick={this.AnadirMedicamentos}>
                            Añadir
                        </button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={this.state.showEliminarMedicamento} onHide={this.handleCloseEliminarMedicamento}>
                        <Modal.Header closeButton>
                        <Modal.Title>Eliminar medicamento</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form noValidate>
                                <Form.Label>Identificador medicamento</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="idMed"
                                    value={this.state.idMed}
                                    onChange={eve => this.handleChangeMedicamento(eve)}
                                />
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        <button className="btn btn-danger p-3 rounded" onClick={this.handleCloseEliminarMedicamento}>
                            Cerrar
                        </button>
                        <button className="btn btn-success p-3 rounded" type="submit" onClick={this.EliminarMedicamentos}>
                            Eliminar
                        </button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={this.state.shworActualizarMedicamento} onHide={this.handleCloseActualizarMedicamento}>
                        <Modal.Header closeButton>
                        <Modal.Title>Actualizar medicamento</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form noValidate>
                                <Form noValidate>
                                    <Form.Label>Identificador medicamento</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="idMed"
                                        value={this.state.idMed}
                                        onChange={eve => this.handleChangeMedicamento(eve)}
                                    />
                                </Form>
                                <br/>
                                <Form.Label>Tipo de medicamento</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="tipoMed"
                                    value={this.state.NumID}
                                    onChange={eve => this.handleChangeMedicamento(eve)}
                                    isInvalid={this.state.NumID === ''}
                                />
                                <br/>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nomMed"
                                    value={this.state.NumID}
                                    onChange={eve => this.handleChangeMedicamento(eve)}
                                    isInvalid={this.state.NumID === ''}
                                />
                                <br/>
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="DesMed"
                                    value={this.state.FechaRetiroMedicamento}
                                    onChange={eve => this.handleChangeMedicamento(eve)}
                                    isInvalid={this.state.FechaRetiroMedicamento === ''}
                                />
                                <br/>
                                <Form.Label>Precio</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="precioMed"
                                    value={this.state.FechaRetiroMedicamento}
                                    onChange={eve => this.handleChangeMedicamento(eve)}
                                    isInvalid={this.state.FechaRetiroMedicamento === ''}
                                />
                                <br/>
                                <Form.Label>Proveedor</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="provMed"
                                    value={this.state.FechaRetiroMedicamento}
                                    onChange={eve => this.handleChangeMedicamento(eve)}
                                    isInvalid={this.state.FechaRetiroMedicamento === ''}
                                />
                                <br/>
                                <Form.Label>Stock</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="stcMed"
                                    value={this.state.FechaRetiroMedicamento}
                                    onChange={eve => this.handleChangeMedicamento(eve)}
                                    isInvalid={this.state.FechaRetiroMedicamento === ''}
                                />
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        <button className="btn btn-danger p-3 rounded" onClick={this.handleCloseActualizarMedicamento}>
                            Cerrar
                        </button>
                        <button className="btn btn-success p-3 rounded" type="submit" onClick={this.ActualizarMedicamentos}>
                            Actualizar
                        </button>
                        </Modal.Footer>
                    </Modal>
                </div>
            )
        }
    }
}


export default MedicamentosHome;
