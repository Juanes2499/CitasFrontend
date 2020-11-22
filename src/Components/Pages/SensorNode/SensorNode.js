import React, { Component } from "react";
import Accordion from "../../Elements/Accordion/Accordion3";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import { MDBProgress } from 'mdbreact';

class SensorNode extends Component {

    constructor(props) {
        super(props);
        this.state = { node: "" }
    }

    render() {

        return (
            <div>
                <div className="row  mt-0">
                    <p className="h5 font-weight-bold mt-0 text-muted">Bienvenido a Smart Cities UAO</p>
                </div>
                <Accordion icon={faChartBar} color="bg-primary" title={"Nodo sensor "}>
                    <div className="card  w-100 col-12 container rounded-0 p-2 m-0">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <div className="p-2 rounded-bottom">
                                    <p className="h6 font-weight-bold text-muted">Identificación del nodo</p>
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
                                            <input type="text" className="form-control" readOnly />
                                        </div>
                                    </div>

                                    <p className="h6 font-weight-bold text-muted">Ubicación del nodo</p>

                                    <div className="col-auto">
                                        <label className="sr-only" htmlFor="inlineFormInputGroup">Longitud</label>
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">Longitud</div>
                                            </div>
                                            <input type="text" className="form-control" readOnly />
                                        </div>
                                    </div>

                                    <div className="col-auto">
                                        <label className="sr-only" htmlFor="inlineFormInputGroup">Latitud</label>
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">Latitud</div>
                                            </div>
                                            <input type="text" className="form-control" readOnly />
                                        </div>
                                    </div>

                                    <p className="h6 font-weight-bold text-muted">Batería</p>

                                    <div className="col-auto">
                                        <MDBProgress value={20} className="my-2" color="danger">20%</MDBProgress>
                                    </div>

                                    <p className="h6 font-weight-bold text-muted">Estado del nodo</p>

                                    <div className="col-auto p-0 d-flex text-white rounded justify-content-center bg-danger">
                                        <p className="mt-1 mb-1">Nodo desactivado</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <Accordion color="stylish-color" title="Temperatura ambiental">
                                            <div className="card">
                                                <p className="mt-2 ml-4">1223535</p>
                                            </div>
                                        </Accordion>
                                    </div>
                                    <div className="col-sm-6">
                                        <Accordion color="stylish-color" title="Temperatura ambiental">
                                            <div className="card">
                                                <p className="mt-2 ml-4">1223535</p>
                                            </div>
                                        </Accordion>
                                    </div>
                                    <div className="col-sm-6">
                                        <Accordion color="stylish-color" title="Temperatura ambiental">
                                            <div className="card">
                                                <p className="mt-2 ml-4">1223535</p>
                                            </div>
                                        </Accordion>
                                    </div>
                                    <div className="col-sm-6">
                                        <Accordion color="stylish-color" title="Temperatura ambiental">
                                            <div className="card">
                                                <p className="mt-2 ml-4">1223535</p>
                                            </div>
                                        </Accordion>
                                    </div>
                                    <div className="col-sm-6">
                                        <Accordion color="stylish-color" title="Temperatura ambiental">
                                            <div className="card">
                                                <p className="mt-2 ml-4">1223535</p>
                                            </div>
                                        </Accordion>
                                    </div>
                                    <div className="col-sm-6">
                                        <Accordion color="stylish-color" title="Temperatura ambiental">
                                            <div className="card">
                                                <p className="mt-2 ml-4">1223535</p>
                                            </div>
                                        </Accordion>
                                    </div>
                                    <div className="col-sm-6">
                                        <Accordion color="stylish-color" title="Temperatura ambiental">
                                            <div className="card">
                                                <p className="mt-2 ml-4">1223535</p>
                                            </div>
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                </Accordion>
            </div>
        )
    }
}

export default SensorNode;
