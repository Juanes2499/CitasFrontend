import React, { Component } from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class AddNode extends Component {
    constructor(props) {
        super(props);
        this.state = { numnode: "", lat: "", long: "", batery: "", operativeState: "" };
        this.addNode = this.addNode.bind(this);
        this.update = this.update.bind(this);
    }

    addNode = () => {
        console.log(this.state);
    }
    update = (name, e) => {
        this.setState({ [name]: e.target.value });
    };
    render() {

        return (
            <div className="contianer p-0">
                <div className="row container mt-0">
                    <p className="h5 font-weight-bold mt-0 text-muted">Bienvenido a Smart Cities UAO</p>
                </div>

                <div className="container d-flex justify-content-center">
                    <div className="card col-sm-8 p-0 ">
                        <div className="card-header bg-primary text-white d-flex ">
                            <FontAwesomeIcon icon={faPlus} className="m-0  align-middle mr-2" />
                            <p className="m-0 align-middle">Agregar nodo sensor</p>
                            <button onClick={this.addNode} className="btn btn-success p-2 text-white z-depth-0 m-0 text-right align-middle ml-auto">Agregar nodo</button>
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
                                        <input type="text" onChange={(e) => this.update("numnode", e)} className="form-control" placeholder="Agregar el número del nodo" />
                                    </div>
                                </div>

                                <p className="h6 font-weight-bold text-muted">Ubicación del nodo</p>

                                <div className="col-auto">
                                    <label className="sr-only" htmlFor="inlineFormInputGroup">Longitud</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">Longitud</div>
                                        </div>
                                        <input type="text" onChange={(e) => this.update("long", e)} className="form-control" placeholder="Agregar la longitud del nodo" />
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <label className="sr-only" htmlFor="inlineFormInputGroup">Latitud</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">Latitud</div>
                                        </div>
                                        <input type="text" onChange={(e) => this.update("lat", e)} className="form-control" placeholder="Agregar la latitud del nodo" />
                                    </div>
                                </div>

                                <p className="h6 font-weight-bold text-muted">Batería</p>

                                <div className="col-auto">
                                    <label className="sr-only" htmlFor="inlineFormInputGroup">Batería</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">Batería</div>
                                        </div>
                                        <input type="text" onChange={(e) => this.update("batery", e)} className="form-control" placeholder="Agregar la batería del nodo" />
                                    </div>
                                </div>

                                <p className="h6 font-weight-bold text-muted">Estado del nodo</p>

                                <div className="col-auto">
                                    <label className="sr-only" htmlFor="inlineFormInputGroup">Estado</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">Estado</div>
                                        </div>
                                        <input type="text" onChange={(e) => this.update("operativeState", e)} className="form-control" placeholder="Agregar el estado del nodo" />
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }



}

export default AddNode;
