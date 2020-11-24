import React, { Component } from "react";
import { MDBProgress } from 'mdbreact';
import Accordion from "../../Elements/Accordion/Accordion3";
import NodeMap from "../../Elements/Map/NodeMap";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

class NodeConfig extends Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.putdata = this.putdata.bind(this);
        this.search = this.search.bind(this);
        this.state = {
            lat: "",
            long: "",
            operativestate: ""
            ,
            selectedNode: 0,
            optionNodes: [],
            node: {
                id: "",
                
            },
            
            status1: false,
        }
    }


    putdata = () => {
        this.httpInstance = axios.create({
            baseURL: "https://xme9h9w868.execute-api.us-east-1.amazonaws.com/get1",
            timeout: 10000,
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(this.state.node);
        console.log(this.state.lat + this.state.long + this.state.operativestate )
        
        this.httpInstance.put('/putnode', {

            "NumNodo": this.state.node.NumNodo,
            "Longitud": this.state.long === "" ? this.state.node.long : this.state.long,
            "Latitud": this.state.lat === "" ? this.state.node.lat : this.state.lat,
            "Bateria": this.state.node.Bateria,
            "Estado": !this.state.operativestate === "" ? this.state.node.operativeState : this.state.operativestate === "Activo" ? true : false

        }
        ).then(respuesta => {
            if (respuesta.status === 200) {
                console.log(respuesta);
            } else {
                console.log(respuesta);
            }
        });
    }
    componentDidMount() {

        this.httpInstance = axios.create({
            baseURL: "https://xme9h9w868.execute-api.us-east-1.amazonaws.com/get1",
            timeout: 10000,
            headers: { 'Content-Type': 'application/json' }
        });

        this.httpInstance.get('/getnodes').then(respuesta => {
            if (respuesta.status === 200) {
                // console.log(respuesta.data.body);
                this.setState({ nodes: respuesta.data.body });
                var result = []
                for (var i in respuesta.data.body) {
                    result.push({ node: respuesta.data.body[i].NumNodo });
                }
                this.setState({ optionNodes: respuesta.data.body });
                this.setState({ status1: true });
                console.log(this.state.node);

            } else {
                console.log(respuesta);
            }
        });

    }

    search = () => {
        console.log(this.state.selectedNode);
        console.log(this.state.optionNodes);

        // this.setState({ nodes: this.state.selectedNode });
        var item = this.state.optionNodes.find(node => node.NumNodo == this.state.selectedNode);
        console.log(item);
        if (item) {
            this.setState({
                node: {
                    "id": item._id,
                    "NumNodo": item.NumNodo,
                    "Latitud": item.Latitud,
                    "Longitud": item.Longitud,
                    "Bateria": item.Bateria,
                    "operativeState": item.Estado
                }
            })
            console.log(this.state.node)
        } else {
            console.log("Dorime");
        }
    }

    update = (name, e) => {
        this.setState({ [name]: e.target.value });
    };
    render() {
        if (this.state.status1) {
            return (
                <div className="mb-4">
                    <div className="row  mt-0">
                        <p className="h5 font-weight-bold mt-0 text-muted">Bienvenido a Smart Cities UAO</p>
                    </div>
                    <div className="row h-25 mb-4 d-flex justify-content-center mt-0">
                        <div className="col-12 col-sm-8">
                            <NodeMap nodes={this.state.nodes} />
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
                                            <select onChange={(event) => { this.setState({ selectedNode: event.target.value }) }} className="custom-select" id="nodeSelector">
                                                <option defaultValue>Seleccione un nodo</option>
                                                {this.state.optionNodes.map((option, i) => {
                                                    return (
                                                        <option key={i} value={option.NumNodo}>Nodo {option.NumNodo}</option>
                                                    );
                                                })}
                                            </select>
                                        </div>
                                        <div className="col">
                                            <button onClick={this.search} className="btn btn-success p-2 text-white z-depth-0 m-0 text-right align-middle mr-auto">Consultar nodo</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row  d-flex justify-content-center">
                        <div className={this.state.node.id === "" ? "invisible" : "col-sm-8"}>
                            <Accordion icon={faWrench} color="bg-primary" title={"Nodo " + this.state.node.NumNodo}>
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
                                                    <input type="text" value={this.state.node.id} className="form-control" readOnly />
                                                </div>
                                            </div>

                                            <div className="col-auto">
                                                <label className="sr-only" htmlFor="inlineFormInputGroup">Número del nodo</label>
                                                <div className="input-group mb-2">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text">Número del nodo</div>
                                                    </div>
                                                    <input type="text" defaultValue={this.state.node.NumNodo} className="form-control" readOnly />
                                                </div>
                                            </div>

                                            <p className="h6 font-weight-bold text-muted">Ubicación del nodo</p>

                                            <div className="col-auto">
                                                <label className="sr-only" htmlFor="inlineFormInputGroup">Longitud</label>
                                                <div className="input-group mb-2">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text">Longitud</div>
                                                    </div>
                                                    <input type="text" defaultValue={this.state.node.Longitud} onChange={(e) => this.update("long", e)} className="form-control"  />
                                                </div>
                                            </div>

                                            <div className="col-auto">
                                                <label className="sr-only" htmlFor="inlineFormInputGroup">Latitud</label>
                                                <div className="input-group mb-2">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text">Latitud</div>
                                                    </div>
                                                    <input type="text" defaultValue={this.state.node.Latitud} onChange={(e) => this.update("lat", e)} className="form-control" placeholder="Agregar la latitud del nodo" />
                                                </div>
                                            </div>

                                            <p className="h6 font-weight-bold text-muted">Batería</p>

                                            <div className="col-auto">
                                                <MDBProgress value={this.state.node.Bateria} className="my-2" color={this.state.node.Bateria > 60 ? "success" : this.state.node.Bateria <= 60 && this.state.node.Bateria >= 30 ? "warning" : "danger"}>{this.state.node.Bateria}%</MDBProgress>
                                            </div>

                                            <p className="h6 font-weight-bold text-muted">Estado del nodo</p>

                                            <div className="col-auto">
                                                <label className="sr-only" htmlFor="inlineFormInputGroup">Estado</label>
                                                <div className="input-group mb-2">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text">Estado</div>
                                                    </div>
                                                    <input type="text" onChange={(e) => this.update("operativestate", e)} defaultValue={this.state.node.operativeState ? "Activo" : "Desactivado"} className="form-control" placeholder="Agregar el estado del nodo" />
                                                </div>
                                            </div>
                                        </form>
                                        <button type="button" onClick={this.putdata} className="btn btn-warning z-depth-0 p-2 text-dark m-0 text-right align-middle mr-1 ml-1">Actualizar datos</button>

                                    </div>
                                </div>
                            </Accordion>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>Cargando....</div>
            )
        }
    }
}

export default NodeConfig;
