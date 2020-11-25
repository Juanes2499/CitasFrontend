import React, { Component } from "react";
import Accordion from "../../Elements/Accordion/Accordion3";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import { MDBProgress } from 'mdbreact';
import axios from "axios";

class SensorNode extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: [
                {
                    idnode: "1",
                    numnode: "1",
                    lat: "3",
                    long: "2",
                    batery: 25,
                    operativestate: "Activo",
                    temperAmb: "12345",
                    humidity: "12345",
                    windSpeed: "1",
                    tempRiver: "1",
                    riverHeight: "1",
                    flow: "34",
                    cau: "12"
                },
                {
                    idnode: "1",
                    numnode: "1",
                    lat: "3",
                    long: "2",
                    batery: 70,
                    operativestate: "Desactivado",
                    temperAmb: "12345",
                    humidity: "12345",
                    windSpeed: "1",
                    tempRiver: "1",
                    riverHeight: "1",
                    flow: "34",
                    cau: "12"
                },

            ],
            nodes2: [],
            status1: false,
            status2: false
        }
        this.httpInstance = axios.create({
            baseURL: "https://xme9h9w868.execute-api.us-east-1.amazonaws.com/get1",
            timeout: 10000,
            headers: { 'Content-Type': 'application/json' }
        });
    }


    componentDidMount () {
        /// console.log("El estado de esto es: " + this.state.nodes2);

        var nodes = [];
        var propm = [];
        var result = [];
        var numdates = 1;
        this.httpInstance.get('/getnodes').then(respuesta => {
            if (respuesta.status === 200) {
                nodes = respuesta.data.body;

                this.httpInstance.get('/getavn').then(respuesta2 => {
                    if (respuesta2.status === 200) {
                        propm = respuesta2.data.body;
                        console.log(propm);
                        for (var i in nodes) {
                            for (var j in propm) {
                                if (nodes[i].NumNodo == propm[j].NumNodo) {
                                    result.push({
                                        idnode: nodes[i].NumNodo,
                                        numnode: nodes[i].NumNodo,
                                        lat: nodes[i].Latitud,
                                        long: nodes[i].Longitud,
                                        batery: nodes[i].Bateria,
                                        operativestate: nodes[i].Estado,
                                        temperAmb: propm[j].data_pro.Temperatura,
                                        humidity: propm[j].data_pro.Humedad,
                                        windSpeed: propm[j].data_pro.Vel_viento,
                                        tempRiver: propm[j].data_pro.Temperatura_agua,
                                        riverHeight: propm[j].data_pro.Nivel_agua,
                                        flow: propm[j].data_pro.Flujo,
                                        cau: propm[j].data_pro.Caudal
                                    })
                                }
                            }
                        }
                        //  console.log(result);
                        this.setState({ nodes2: result, status1: true, status2: true });
                        console.log(this.state.nodes2)
                    } else {
                        console.log(respuesta2);
                    }
                });


                //console.log(nodes)
            } else { console.log(respuesta); }
        });





    }

    render () {
        if (this.state.status1 && this.state.status2) {

            return (
                <div>
                    <div className="row  mt-0">
                        <p className="h5 font-weight-bold mt-0 text-muted">Bienvenido a Smart Cities UAO</p>
                    </div>
                    {this.state.nodes2.map((node, i) => {
                        return (
                            <Accordion key={i} icon={faChartBar} color="bg-primary" title={"Nodo sensor " + node.numnode}>
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
                                                        <input type="text" value={node.idnode} className="form-control" readOnly />
                                                    </div>
                                                </div>

                                                <div className="col-auto">
                                                    <label className="sr-only" htmlFor="inlineFormInputGroup">Número del nodo</label>
                                                    <div className="input-group mb-2">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text">Número del nodo</div>
                                                        </div>
                                                        <input type="text" value={node.numnode} className="form-control" readOnly />
                                                    </div>
                                                </div>

                                                <p className="h6 font-weight-bold text-muted">Ubicación del nodo</p>

                                                <div className="col-auto">
                                                    <label className="sr-only" htmlFor="inlineFormInputGroup">Longitud</label>
                                                    <div className="input-group mb-2">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text">Longitud</div>
                                                        </div>
                                                        <input type="text" value={node.long} className="form-control" readOnly />
                                                    </div>
                                                </div>

                                                <div className="col-auto">
                                                    <label className="sr-only" htmlFor="inlineFormInputGroup">Latitud</label>
                                                    <div className="input-group mb-2">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text">Latitud</div>
                                                        </div>
                                                        <input type="text" value={node.lat} className="form-control" readOnly />
                                                    </div>
                                                </div>

                                                <p className="h6 font-weight-bold text-muted">Batería</p>

                                                <div className="col-auto">
                                                    <MDBProgress value={node.batery} className="my-2" color={node.batery > 60 ? "success" : node.batery >= 30 && node.batery <= 60 ? "warning" : "danger"}>{node.batery}%</MDBProgress>
                                                </div>

                                                <p className="h6 font-weight-bold text-muted">Estado del nodo</p>

                                                <div className={(node.operativestate ? "bg-success" : "bg-danger") + " col-auto p-0 d-flex text-white rounded justify-content-center"}>
                                                    <p className="mt-1 mb-1">Nodo {node.operativestate ? "Activo" : "Desactivado"}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <Accordion color="stylish-color" title="Temperatura ambiente">
                                                        <div className="card">
                                                            <p className="mt-2 ml-4">{node.temperAmb}</p>
                                                        </div>
                                                    </Accordion>
                                                </div>
                                                <div className="col-sm-6">
                                                    <Accordion color="stylish-color" title="Humedad">
                                                        <div className="card">
                                                            <p className="mt-2 ml-4">{node.humidity}</p>
                                                        </div>
                                                    </Accordion>
                                                </div>
                                                <div className="col-sm-6">
                                                    <Accordion color="stylish-color" title="Velocidad viento">
                                                        <div className="card">
                                                            <p className="mt-2 ml-4">{node.windSpeed}</p>
                                                        </div>
                                                    </Accordion>
                                                </div>
                                                <div className="col-sm-6">
                                                    <Accordion color="stylish-color" title="Temperatura del río">
                                                        <div className="card">
                                                            <p className="mt-2 ml-4">{node.tempRiver}</p>
                                                        </div>
                                                    </Accordion>
                                                </div>
                                                <div className="col-sm-6">
                                                    <Accordion color="stylish-color" title="Nivel del río">
                                                        <div className="card">
                                                            <p className="mt-2 ml-4">{node.riverHeight}</p>
                                                        </div>
                                                    </Accordion>
                                                </div>
                                                <div className="col-sm-6">
                                                    <Accordion color="stylish-color" title="Flujo del río">
                                                        <div className="card">
                                                            <p className="mt-2 ml-4">{node.flow}</p>
                                                        </div>
                                                    </Accordion>
                                                </div>
                                                <div className="col-sm-6">
                                                    <Accordion color="stylish-color" title="Caudal del río">
                                                        <div className="card">
                                                            <p className="mt-2 ml-4">{node.cau}</p>
                                                        </div>
                                                    </Accordion>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </Accordion>
                        )
                    })}


                </div>
            )
        } else {
            return (
                <div>Cargando....</div>
            )
        }
    }
}

export default SensorNode;
