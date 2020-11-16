import React, { Component } from "react";
import axios from 'axios';
import "./Login2.css";
import { MDBInput, MDBBtn } from "mdbreact";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faEye, faEyeSlash
} from "@fortawesome/free-solid-svg-icons";

import Navbar from "../../Elements/Navbar/Navbar";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
class Login2 extends Component {
    constructor() {
        super();
        this.state = { email: "", password: "", login: false, showPassword: false };
        this.togglePassword = this.togglePassword.bind(this);
    }
    togglePassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    }
    loginfun = async () => {
        const { email, password } = this.state;
        console.log(`El correo es ${email} y la contraseña es ${password}`);



        const httpInstance = axios.create({
            baseURL: "http://localhost:3030/",
            timeout: 1000,
            headers: { 'Content-Type': 'application/json' }
        });//

        httpInstance.interceptors.response.use(null, error => {
            const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
            if (!expectedError) {
                // Loggear mensaje de error a un servicio como Sentry
                // Mostrar error genérico al usuario
                return Promise.reject(error);
            }
        }
        );
        //------
        httpInstance.post('login', { email, password }).then(respuesta => {
            if (respuesta.statusText === "OK") {
                console.log(respuesta.data);
                localStorage.setItem(
                    "login",
                    JSON.stringify({
                        token: respuesta.data.token,
                    })
                );

                this.props.history.push("/Dashboard/Desktop");
            } else {
                console.log("error fatal")
            }

        }).catch(error => {
            console.error(error);
        })

    };//fin de login fun 

    render() {
        return (
            <div className="o-container-login">
                <Navbar />
                <div className="d-flex align-items-center justify-content-center">
                    <div className="o-login-form  shadow bg-white">
                        <p className=" text-center h3 font-weight-bold d-flex align-items-center justify-content-center">Bienvenido, Gobierno</p>
                        <MDBInput maxlength="30" onChange={(event) => {
                            this.setState({ email: event.target.value });
                        }} label="Correo" icon="envelope" />
                        <span className="o-password-button d-flex mt-3 justify-content-end " onClick={this.togglePassword} ><FontAwesomeIcon  className="o-toggle-pass-button" icon={this.state.showPassword ? faEyeSlash : faEye} /></span>
                        <MDBInput maxlength="30" onChange={(event) => {
                            this.setState({ password: event.target.value });
                        }} label="Contraseña" id="input-pwd" type={this.state.showPassword ? "text" : "password"} icon="lock"/>

              
                        <div className="d-flex align-items-center justify-content-center">
                            <MDBBtn onClick={this.loginfun} className="rounded-pill btn-block blue-gradient btn btn-lg mt-2 font-weight-bold text-light" >Iniciar sesión</MDBBtn>
                        
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Login2;

/*
  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                       <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    </Grid>
                    <Grid item>
                                <TextField name="email" onChange={(event) => {
                                    this.setState({ email: event.target.value });
                                }} id="email" label="Correo" style={{ width: "16rem" }}  type="email" inputProps={{ maxLength: 30 }}/>
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                    <FontAwesomeIcon icon={faLock} className="mr-2" />
                    </Grid>
                    <Grid item>
                                <TextField onChange={(event) => {
                                    this.setState({ password: event.target.value });
                                }} inputProps={{ maxLength: 20 }} style={{ width: "16rem" }}  className="o-input-login" name="password" id="password" label="Contraseña" type="password" />
                    </Grid>
                        </Grid>
                        <button type="button" onClick={this.loginfun} className=" bg-primary mt-5 o-login-btn font-weight-bold text-light" >Iniciar sesión</button>
*/