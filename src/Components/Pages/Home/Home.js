import React, { Component } from "react";
import NodeMap from "../../Elements/Map/NodeMap";
import Accordion from "../../Elements/Accordion/Accordion3";
import axios from "axios";
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: [
            ],
            criticalNodes: 0,
            variables: {
                temperAmb: 0,
                humidity: 0,
                windSpeed: 0,
                tempRiver: 0,
                riverHeight: 0,
                flow: 0,
                cau: 0
            },
            status1: false,
            status2: false



        }

    }
    componentDidMount () {

        if (!this.state.status1 && !this.state.status2) {
            this.httpInstance = axios.create({
                baseURL: "https://xme9h9w868.execute-api.us-east-1.amazonaws.com/get1",
                timeout: 1000,
                headers: { 'Content-Type': 'application/json' }
            });

            this.httpInstance.get('/getnodes').then(respuesta => {
                if (respuesta.status === 200) {
                    // console.log(respuesta.data.body);
                    this.setState({ criticalNodes: respuesta.data.body.length });
                    this.setState({ nodes: respuesta.data.body });
                    this.setState({ status1: true });
                    console.log(this.state.nodes);

                } else {
                    console.log(respuesta);
                }
            });

            this.httpInstance.get('/getgeneraldata').then(respuesta => {
                if (respuesta.status === 200) {

                    // console.log(respuesta.data);
                    this.setState({
                        variables: {
                            temperAmb: respuesta.data.Temperatura,
                            humidity: respuesta.data.Humedad,
                            windSpeed: respuesta.data.Vel_viento,
                            tempRiver: respuesta.data.Temperatura_agua,
                            riverHeight: respuesta.data.Nivel_agua,
                            flow: respuesta.data.Flujo,
                            cau: respuesta.data.Caudal
                        }
                    })
                    this.setState({ status2: true });
                } else {
                    console.log(respuesta);
                }
            });
        }

    }
    render () {
        if (this.state.status1 && this.state.status2) {

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
                                    <p className="h4">Nodos : <span className="text-warning">{this.state.criticalNodes}</span></p>
                                </div>
                            </Accordion>
                            <Accordion title="Estado del nodo" color="bg-primary">
                                <div className="card p-2 m-0">
                                    {this.state.nodes.map((node, i) => {
                                        return (
                                            <p key={i}>Estado del nodo {node.NumNodo} es: <span className={node.Estado === true ? "text-success" : "text-danger"}>{node.Estado ? "Activo" : "Apagado"} </span></p>
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
        } else {
            return (
                <div>
                    Cargando ....
                </div>
            );
        }
    }

}

export default Home;