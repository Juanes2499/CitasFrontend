import React, { Component } from 'react';
import Navbar from "../../Elements/Navbar/Navbar";
import Medicamentos from "../../../Imgs/Logo toujours.png"
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import axios from 'axios';
import {API_HOST} from './../../../varenv';
import AlertSuccess from '../../Shared/AlertSuccess';
import AlertFailed from '../../Shared/AlertFailed';


const options = [
    {
        label: "Seleeccionar tipo de identificación",
        value: 0,
    },
    {
        label: "Cédula de ciudadania",
        value: 1,
    },
    {
        label: "Tarjeta de identidad",
        value: 2,
    },
    {
        label: "Pasaporte",
        value: 3,
    },
    {
        label: "Permiso de permanecia",
        value: 4,
    },
];

class Home extends Component{

    state = { 
        show: false,
        showCancelarCita:false,

        showSuccessAlert:'',
        showFailedAlert:'',
        TituloAlert:'',
        CuerpoAlert:'',

        TipoID: null,
        NumID: null,
        EPS: null,
        Email:null,
        FechaRetiroMedicamento: null,
    };
    
    handleChangeAgendarCita(event) {
        const { name, value } = event.target
        this.setState({[name]: value })
        console.log(this.state);
    }
    
    handleShowAgendarCita = () => {
        this.setState({ show: true });
    };

    handleCloseAgendarCita = () => {
        this.setState({ show: false });
    };

    handleShowCancelarCita = () => {
        this.setState({ showCancelarCita: true });
    };

    handleCloseCancelarCita = () => {
        this.setState({ showCancelarCita: false });
    };

    GuardarCambiosAngendarCita = () =>{
        this.handleCloseAgendarCita();

        console.log(this.state);

        const {TipoID, NumID, EPS, Email,FechaRetiroMedicamento} = this.state;

        const PostAgendarCitas ={
            tipo_id: TipoID,
            num_id: NumID,
            eps: EPS,
            email: Email,
            fecha_cita: FechaRetiroMedicamento,
        }

        console.log(API_HOST)
        
        Promise.all([
            axios.post(`${API_HOST}/api/agendarCitas`,PostAgendarCitas)
        ]).then(()=>{
            /*this.setState({
                showSuccessAlert:true, 
                TituloAlert:'Estado de su cita...', 
                CuerpoAlert:'Su cita ha sido agedada exitosamente'
            });*/
            alert("Su cita ha sido agendada exitosamente");
        }).catch((err)=>{
            /*this.setState({
                showFailedAlert:true, 
                TituloAlert:'Estado de su cita...', 
                CuerpoAlert:'No se ha podido agendar su cita, por favor revisa el formulario o ponerse en contacto con la farmacia'
            });*/
            alert("No se ha podido agendar su cita, por favor revisa el formulario o ponerse en contacto con la farmacia");
        })
    }


    CancelarCambiosAngendarCita = () =>{
        this.handleCloseCancelarCita();

        console.log(this.state);

        const {TipoID, NumID, FechaRetiroMedicamento} = this.state;

        const PostCancelarCitas ={
            tipo_id: TipoID,
            num_id: NumID,
            fecha_cita: FechaRetiroMedicamento,
        }

        console.log(API_HOST)
        
        Promise.all([
            axios.put(`${API_HOST}/api/agendarCitas`,PostCancelarCitas)
        ]).then(()=>{
            /*this.setState({
                showSuccessAlert:true, 
                TituloAlert:'Estado de su cita...', 
                CuerpoAlert:'Su cita ha sido cancelada exitosamente'
            });*/
            alert("Su cita ha sido cancelada exitosamente");
        }).catch((err)=>{
            /*this.setState({
                showFailedAlert:true, 
                TituloAlert:'Estado de su cita...', 
                CuerpoAlert:'No se ha podido cancelar su cita, por favor revisa el formulario o ponerse en contacto con la farmacia'
            });*/
            alert("No se ha podido cancelar su cita, por favor revisa el formulario o ponerse en contacto con la farmacia");
        })
    }

    CerrarCancelarCita = () =>{
        this.handleCloseCancelarCita();
    }

    render(){
        return(
            <div className="w-100 o-container-info-api h-100 m-0 p-0">
                <Navbar />
                <AlertSuccess
                    open={this.state.showSuccessAlert}
                    titulo={this.state.TituloAlert}
                    cuerpo={this.state.CuerpoAlert}
                />

                <AlertFailed
                    open={this.state.showFailedAlert}
                    titulo={this.state.TituloAlert}
                    cuerpo={this.state.CuerpoAlert}
                />          
                
                
                <img src={Medicamentos} alt="Background of a City" width="100%" height="60%" />
                    <div className="row mt-4 mb-4 d-flex justify-content-center">
                        <div className="col-12 col-sm-6">
                            <h3 className="TitTablas">Bienvenidos</h3>
                        </div>
                    </div>
                <div className="row mt-2">
                    <div className="container">
                        <button
                            className="btn btn-primary btn-lg btn-block p-3 rounded"
                            data-toggle="collapse"
                            aria-label="Toggle navigation"
                            onClick={this.handleShowAgendarCita}
                        >
                            Pedir cita para retirar medicamentos
                        </button>
                        <br/>
                        <button
                                className="btn btn-danger btn-lg btn-block p-3 rounded"
                                data-toggle="collapse"
                                aria-label="Toggle navigation"
                                onClick={this.handleShowCancelarCita}
                            >
                            Cancelar cita para retirar medicamentos
                        </button>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>

                <Modal show={this.state.show} onHide={this.handleCloseAgendarCita}>
                    <Modal.Header closeButton>
                    <Modal.Title>Agende su cita para retirar el medicamento</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form noValidate>
                            <Form.Label>Tipo de identificación</Form.Label>
                            <Form.Control 
                                as="select" 
                                name="TipoID" 
                                onChange={eve => this.handleChangeAgendarCita(eve)} 
                                isInvalid={this.state.TipoID === ''}
                            >
                                {options.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                            </Form.Control>
                            <br/>
                            <Form.Label>Número de identificación</Form.Label>
                            <Form.Control
                                type="text"
                                name="NumID"
                                value={this.state.NumID}
                                onChange={eve => this.handleChangeAgendarCita(eve)}
                                isInvalid={this.state.NumID === ''}
                            />
                            <br/>
                            <Form.Label>EPS</Form.Label>
                            <Form.Control
                                type="text"
                                name="EPS"
                                value={this.state.EPS}
                                onChange={eve => this.handleChangeAgendarCita(eve)}
                                isInvalid={this.state.EPS === ''}
                            />
                            <br/>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="Email"
                                value={this.state.Email}
                                onChange={eve => this.handleChangeAgendarCita(eve)}
                                isInvalid={this.state.Email === ''}
                            />
                            <br/>
                            <Form.Label>Fecha retiro medicamento</Form.Label>
                            <Form.Control
                                type="date"
                                name="FechaRetiroMedicamento"
                                value={this.state.FechaRetiroMedicamento}
                                onChange={eve => this.handleChangeAgendarCita(eve)}
                                isInvalid={this.state.FechaRetiroMedicamento === ''}
                            />
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <button className="btn btn-danger p-3 rounded" onClick={this.handleCloseAgendarCita}>
                        Cerrar
                    </button>
                    <button className="btn btn-success p-3 rounded" type="submit" onClick={this.GuardarCambiosAngendarCita}>
                        Guardar cambios
                    </button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showCancelarCita} onHide={this.CerrarCancelarCita}>
                    <Modal.Header closeButton>
                    <Modal.Title>Cancelar cita para retirar medicamentos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form noValidate>
                            <Form.Label>Tipo de identificación</Form.Label>
                            <Form.Control 
                                as="select" 
                                name="TipoID" 
                                onChange={eve => this.handleChangeAgendarCita(eve)} 
                                isInvalid={this.state.TipoID === ''}
                            >
                                {options.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                            </Form.Control>
                            <br/>
                            <Form.Label>Número de identificación</Form.Label>
                            <Form.Control
                                type="text"
                                name="NumID"
                                value={this.state.NumID}
                                onChange={eve => this.handleChangeAgendarCita(eve)}
                                isInvalid={this.state.NumID === ''}
                            />
                            <br/>
                            <Form.Label>Fecha programada retiro</Form.Label>
                            <Form.Control
                                type="date"
                                name="FechaRetiroMedicamento"
                                value={this.state.FechaRetiroMedicamento}
                                onChange={eve => this.handleChangeAgendarCita(eve)}
                                isInvalid={this.state.FechaRetiroMedicamento === ''}
                            />
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <button className="btn btn-danger p-3 rounded" onClick={this.CerrarCancelarCita}>
                        Cerrar
                    </button>
                    <button className="btn btn-success p-3 rounded" type="submit" onClick={this.CancelarCambiosAngendarCita}>
                        Guardar cambios
                    </button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}


export default Home;
