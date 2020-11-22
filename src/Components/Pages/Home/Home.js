import React, { Component } from "react";
import NodeMap from "../../Elements/Map/NodeMap";
import Accordion from "../../Elements/Accordion/Accordion3";

class Home extends Component {

    render() {

        return (
            <div>
                <div className="row mt-0">
                    <p className="h5 font-weight-bold mt-0 text-muted">Bienvenido a Smart Cities UAO</p>
                </div>
                <div className="row mt-4">
                    <div className="col-12 col-sm-8">
                        <NodeMap />
                    </div>
                    <div className="col">
                        <Accordion title="Nodos" color="bg-primary">
                            <div className="card p-3 m-0">
                                <p className="h4">Nodos Críticos: <span className="text-warning">3</span></p>
                            </div>
                        </Accordion>
                        <Accordion title="Estado del nodo" color="bg-primary">
                            <div className="card p-2 m-0">
                                <p>Estado del nodo 1 es: <span className="text-danger">Inactivo</span></p>
                                <p>Estado del nodo 2 es: <span className="text-success">Activo</span></p>
                            </div>
                        </Accordion>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 col-sm-6">
                        <Accordion title="Promedio general de variables climatológicas" color="bg-primary">
                            <div className="card ml-0 mr-0 mb-5 p-2">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <p className="h5">Temperatura</p>
                                        <p className="text-warning">38.4</p>
                                        <small className="font-italic">Grados Celsius</small>
                                    </div>
                                    <div className="col-sm-4">
                                        <p className="h5">Humedad</p>
                                        <p className="text-warning">38.4</p>
                                        <small className="font-italic">Porcentaje</small>
                                    </div>
                                    <div className="col-sm-4">
                                        <p className="h5">Velocidad del Viento</p>
                                        <p className="text-warning">38.4</p>
                                        <small className="font-italic">Km/h</small>
                                    </div>
                                </div>
                                </div>
                        </Accordion>
                    </div>
                    <div className="col">
                        <Accordion title="Promedio general de variables del río" color="bg-primary">
                            <div className="card ml-0 mr-0 mb-5 p-2">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="h5">Temperatura agua</p>
                                        <p className="text-warning">38.4</p>
                                        <small className="font-italic">Grados Celsius</small>
                                    </div>
                                    <div className="col-sm-3">
                                        <p className="h5">Nivel del agua</p>
                                        <p className="text-warning">38.4</p>
                                        <small className="font-italic">Metros</small>
                                    </div>
                                    <div className="col-sm-3">
                                        <p className="h5">Caudal</p>
                                        <p className="text-warning">38.4</p>
                                        <small className="font-italic">Litros/min</small>
                                    </div>
                                    <div className="col-sm-3">
                                        <p className="h5">Flujo</p>
                                        <p className="text-warning">38.4</p>
                                        <small className="font-italic">Litros/min</small>
                                    </div>
                                </div>
                                </div>
                        </Accordion>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;