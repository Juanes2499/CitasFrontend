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
                                    <Inject services={[Page, Filter, Toolbar, Edit]} />
                                </GridComponent>
                            </div>
                        </Tab>
                    </Tabs>
                        
                    </div>
                </div>
            )
        }
    }
}


export default MedicamentosHome;
