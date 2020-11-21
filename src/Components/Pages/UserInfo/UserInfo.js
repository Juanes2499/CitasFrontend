import React, {Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

class UserInfo extends Component{
    constructor(props) {
        super(props);
        this.state = { nombres: "", apellidos: "", celular: ""};
    }


    render() {
        
        return (
            <div className="container d-flex justify-content-center">
                <div className="card col-sm-8 p-0">
                    <div className="card-header bg-primary text-white d-flex ">
                        <FontAwesomeIcon icon={faAddressCard} className="m-0  align-middle mr-2" />
                        <p className="m-0 align-middle">Información del usuario</p>
                        <button type="submit" className="btn btn-warning z-depth-0 p-2 text-dark m-0 text-right align-middle ml-auto">Actualizar datos</button>
                    </div>
                    <div className="card-body">
                        <p className="h6 font-weight-bold text-muted">Identificación usuario</p>
                        <form>
                            <div className="col-auto">
                                <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">ID usuario</div>
                                    </div>
                                    <input type="text" className="form-control" id="inlineFormInputGroup" />
                                </div>
                            </div>

                            <div className="col-auto">
                                <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">Tipo de Identificación</div>
                                    </div>
                                    <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Tipo de Identificación" />
                                </div>
                            </div>

                            <div className="col-auto">
                                <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">Número de Identificación</div>
                                    </div>
                                    <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Número de Identificación" />
                                </div>
                            </div>

                            <p className="h6 font-weight-bold text-muted">Nombres y apellidos</p>

                            <div className="col-auto">
                                <label className="sr-only" htmlFor="inlineFormInputGroup">Nombre</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">Nombres</div>
                                    </div>
                                    <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Nombre" />
                                </div>
                            </div>

                            <div className="col-auto">
                                <label className="sr-only" htmlFor="inlineFormInputGroup">Apellidos</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">Apellidos</div>
                                    </div>
                                    <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Apellidos" />
                                </div>
                            </div>

                            <p className="h6 font-weight-bold text-muted">Contacto</p>

                            <div className="col-auto">
                                <label className="sr-only" htmlFor="inlineFormInputGroup">Correo electrónico</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">Correo electrónico</div>
                                    </div>
                                    <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Correo electrónico" />
                                </div>
                            </div>

                            <div className="col-auto">
                                <label className="sr-only" htmlFor="inlineFormInputGroup">Celular</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">Celular</div>
                                    </div>
                                    <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Celular" />
                                </div>
                            </div>

                            <div className="col-auto">
                                <label className="sr-only" htmlFor="inlineFormInputGroup">Dirección</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">Dirección</div>
                                    </div>
                                    <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Dirección" />
                                </div>
                            </div>

                            <p className="h6 font-weight-bold text-muted">Tipo de usuario</p>

                            <div className="col-auto">
                                <label className="sr-only" htmlFor="inlineFormInputGroup">Funcionario del gobierno</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">Funcionario del gobierno</div>
                                    </div>
                                    <input type="text" className="form-control" id="inlineFormInputGroup" />
                                </div>
                            </div>

                            <div className="col-auto">
                                <label className="sr-only" htmlFor="inlineFormInputGroup">Código funcionario</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">Código funcionario</div>
                                    </div>
                                    <input type="text" className="form-control" id="inlineFormInputGroup" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div> 
            </div>
        );
    }



}

export default UserInfo;
