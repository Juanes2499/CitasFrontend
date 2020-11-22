import React, { Component } from "react";
import { MDBProgress } from 'mdbreact';
import Accordion from "../../Elements/Accordion/Accordion";
import NodeMap from "../../Elements/Map/NodeMap";

class NodeConfig extends Component {

    render() {
        return (
            <div >
                <div className="row  mt-0">
                    <p className="h5 font-weight-bold mt-0 text-muted">Bienvenido a Smart Cities UAO</p>
                </div>
                <div className="row h-25 mb-4 d-flex justify-content-center mt-0">
                    <div className="col-12 col-sm-8">
                        <NodeMap />
                    </div>
                </div>
                <div className="row  d-flex justify-content-center">
                    <div className="col-sm-8">
                        <div className="card p-0">
                            <div className="card-header bg-primary text-white d-flex ">
                                <p className="m-0 align-middle">Tabla de resultados por nodo</p>
                            </div>
                            <div className="card-body">
                                <p className="h6 font-weight-bold text-muted">¿Cuál nodo sensor desea consultar?</p>
                                <div className="row p-1">
                                    <div className="col-6 col-sm-4 ">
                                        <select class="custom-select" id="nodeSelector">
                                            <option selected>Todos los nodos</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <button className="btn btn-success p-2 text-white z-depth-0 m-0 text-right align-middle mr-auto">Consultar nodo</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row  d-flex justify-content-center">
                    <div className="col-sm-8">
                        <Accordion title="Nodo 1">
                            <div className="card container rounded-0 p-2 m-0">
                                <div className="p-2 rounded-bottom">
                                    <p className="h6 font-weight-bold text-muted">Identificación del nodo</p>
                                    <form>
                                        <div className="col-auto">
                                            <label className="sr-only" htmlFor="inlineFormInputGroup">ID del nodo</label>
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">ID del nodo</div>
                                                </div>
                                                <input type="text" className="form-control" readOnly />
                                            </div>
                                        </div>

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
                                            <MDBProgress value={20} className="my-2" color="danger">20%</MDBProgress>
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
                                    </form>
                                </div>
                            </div>
                        </Accordion>
                    </div>
                </div>
            </div>
        );
    }
}

export default NodeConfig;
