import React, { Component } from "react";
import NodeMap from "../../Elements/Map/NodeMap";
import Accordion from "../../Elements/Accordion/Accordion3";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: [
                {
                    idnode: "1",
                    numnode: "1",
                    lat: "-33.8478796",
                    long: "150.7918932",
                    batery: 25,
                    operativestate: "Activo"
                },
                {
                    idnode: "1",
                    numnode: "1",
                    lat: "-25.8478796",
                    long: "150.7918932",
                    batery: 25,
                    operativestate: "Desactivado"
                }
            ],
            criticalNodes: "",
            variables: {
                temperAmb: "12345",
                humidity: "12345",
                windSpeed: "1",
                tempRiver: "1",
                riverHeight: "1",
                flow: "34",
                cau: "12"
            }

        }
}
    render() {

        return (
            <div>
                <div className="row mt-0">
                    <p className="h5 font-weight-bold mt-0 text-muted">Bienvenido a Smart Cities UAO</p>
                </div>
                <div className="row mt-4">
                    <div className="col-12 col-sm-8">
                        <NodeMap nodes={this.state.nodes} />
                    </div>
                    <div className="col">
                        <Accordion title="Nodos" color="bg-primary">
                            <div className="card p-3 m-0">
                                <p className="h4">Nodos Críticos: <span className="text-warning">3</span></p>
                            </div>
                        </Accordion>
                        <Accordion title="Estado del nodo" color="bg-primary">
                            <div className="card p-2 m-0">
                                {this.state.nodes.map((node, i) => {
                                    return (
                                        <p key={i}>Estado del nodo {node.numnode} es: <span className={node.operativestate === "Activo" ? "text-success" : "text-danger"}>{node.operativestate}</span></p>
                                    );
                                })}
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
                                        <p className="text-warning">{this.state.variables.temperAmb}</p>
                                        <small className="font-italic">Grados Celsius</small>
                                    </div>
                                    <div className="col-sm-4">
                                        <p className="h5">Humedad</p>
                                        <p className="text-warning">{this.state.variables.humidity}</p>
                                        <small className="font-italic">Porcentaje</small>
                                    </div>
                                    <div className="col-sm-4">
                                        <p className="h5">Velocidad del Viento</p>
                                        <p className="text-warning">{this.state.variables.windSpeed}</p>
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
                                        <p className="text-warning">{this.state.variables.tempRiver}</p>
                                        <small className="font-italic">Grados Celsius</small>
                                    </div>
                                    <div className="col-sm-3">
                                        <p className="h5">Nivel del agua</p>
                                        <p className="text-warning">{this.state.variables.riverHeight}</p>
                                        <small className="font-italic">Metros</small>
                                    </div>
                                    <div className="col-sm-3">
                                        <p className="h5">Caudal</p>
                                        <p className="text-warning">{this.state.variables.cau}</p>
                                        <small className="font-italic">Litros/min</small>
                                    </div>
                                    <div className="col-sm-3">
                                        <p className="h5">Flujo</p>
                                        <p className="text-warning">{this.state.variables.flow}</p>
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