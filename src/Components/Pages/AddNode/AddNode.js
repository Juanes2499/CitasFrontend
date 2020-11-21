import React, { Component } from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class AddNode extends Component {
    constructor(props) {
        super(props);
        this.state = { nombres: "", apellidos: "", celular: "" };
    }


    render() {

        return (
            <div className="container d-flex justify-content-center">
                <div className="card col-sm-8 p-0 ">
                    <div className="card-header bg-primary text-white d-flex ">
                        <FontAwesomeIcon icon={faPlus} className="m-0  align-middle mr-2" />
                        <p className="m-0 align-middle">Agregar nodo sensor</p>
                        <button type="submit" className="btn btn-success p-2 text-white  z-depth-0 m-0 text-right align-middle ml-auto">Agregar nodo</button>
                    </div>
                    <div className="card-body">
                        <p className="h6 font-weight-bold text-muted">Identificación del nodo</p>
                        <form>
                            <div className="col-auto">
                                <label className="sr-only" htmlFor="inlineFormInputGroup">Número del nodo</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">Número del nodo</div>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Agregar el número del nodo" />
                                </div>
                            </div>

                            <p className="h6 font-weight-bold text-muted">Ubicación del nodo</p>

                            <div className="col-auto">
                                <label className="sr-only" htmlFor="inlineFormInputGroup">Longitud</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">Longitud</div>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Agregar la longitud del nodo" />
                                </div>
                            </div>

                            <div className="col-auto">
                                <label className="sr-only" htmlFor="inlineFormInputGroup">Latitud</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">Latitud</div>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Agregar la latitud del nodo" />
                                </div>
                            </div>

                            <p className="h6 font-weight-bold text-muted">Batería</p>

                            <div className="col-auto">
                                <label className="sr-only" htmlFor="inlineFormInputGroup">Batería</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">Batería</div>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Agregar la batería del nodo" />
                                </div>
                            </div>

                            <p className="h6 font-weight-bold text-muted">Estado del nodo</p>

                            <div className="col-auto">
                                <label className="sr-only" htmlFor="inlineFormInputGroup">Estado</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">Estado</div>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Agregar el estado del nodo" />
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

export default AddNode;
