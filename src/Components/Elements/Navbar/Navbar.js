import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import Logo from "../../../Imgs/LogoSalud.png";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {API_HOST, WEB_HOST} from './../../../varenv';
import axios from 'axios';
import { Switch, Route, Redirect } from "react-router-dom";

class Navbar extends Component{
    
    state = {
        navbarIsOpen: true,
        showIniciarSesion: false,

        email:'',
        password:'', 
    }

    toggleNavbar = () => {
        this.setState({navbarIsOpen: false});
    };

    handleShowLogin = () => {
        this.setState({ showIniciarSesion: true });
    };
    
    handleCloseLogin = () => {
        this.setState({ showIniciarSesion: false });
    };

    handleChangeLogin(event) {
        const { name, value } = event.target
        this.setState({[name]: value })
        console.log(this.state);
    }

    IniciarSesionAction = () =>{
        console.log(this.state);
        
        const {email, password} = this.state;
        
        const PostLogin = {
            email: email,
            password: password
        }
        
        Promise.all([
            axios.post(`${API_HOST}/api/users/login`,PostLogin)
        ]).then(([rp1])=>{
            var success = rp1.data.success;
            var token = rp1.data.token;
            if (success === 1 && token.length>0){
                window.sessionStorage.setItem('SuccessUser', success);
                window.sessionStorage.setItem('TokenUser',token);
                window.location.href=`${WEB_HOST}/DashboardUser`;
            } else if(success === 0){
                alert(`No ha sido posible iniciar sesión. Error ${rp1.data.data}`)
            }
        }).catch((err)=>{
            alert(`No ha sido posible iniciar sesión. Error ${err}`)
        })

        this.handleCloseLogin()
    }

    render(){
        return (
            <nav className="navbar  sticky-top shadow-sm  navbar-expand-sm o-navbar ">
                <div className="container">
                    <a className="navbar-brand" href="/Home">
                        <img src={Logo} width="30" height="30" alt="Logo" />
                    </a>
                    <button
                        className="navbar-toggler btn btn-lg text-secondary border p-3 rounded o-btns"
                        data-toggle="collapse"
                        aria-label="Toggle navigation"
                        onClick={this.toggleNavbar}
                    >
                        <FontAwesomeIcon icon={faAlignJustify} />
                    </button>
                    <div
                        className={`${this.state.navbarIsOpen ? "collapse" : ""
                            } navbar-collapse justify-content-lg-end`}
                        id="navbar-menu"
                    >
                        <a className="nav-link o-navbar-links font-weight-bold" href="/Home">Home</a>
                        <a className="nav-link o-navbar-links font-weight-bold" href="/MedicamentosHome">Consultar medicamentos</a>
                        <Button variant="light" onClick={ this.handleShowLogin }>Login</Button>

                    </div>
                </div>

                <Modal show={this.state.showIniciarSesion} onHide={this.handleCloseLogin}>
                    <Modal.Header closeButton>
                    <Modal.Title>Iniciar sesión</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form noValidate>
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={eve => this.handleChangeLogin(eve)}
                            />
                            <br/>
                            <Form.Label>Constraseña</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={eve => this.handleChangeLogin(eve)}
                            />
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-danger p-3 rounded" onClick={this.handleCloseLogin} >
                            Cerrar
                        </button>
                        <button className="btn btn-success p-3 rounded" type="submit" onClick={this.IniciarSesionAction} >
                            Inicial sesión 
                        </button>
                    </Modal.Footer>
                </Modal>
            </nav>
        );
    }
};

export default Navbar;
