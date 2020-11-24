import React, { Component } from 'react';
import DataTable from "../../Elements/Table/DataTable";
import axios from "axios";
class InfoTable extends Component {
    constructor(props) {
        super(props);
        this.searchNode = this.searchNode.bind(this);
        this.state = {
            selectedNode: "",
            lat: "",
            long: "",
            optionNodes: []
            ,
            rawData: [
                {
                    lat: "1",
                    long: "2",
                    idNodo: 1,
                    temperature: 16,
                    temperatureWater: 14,
                    levelRiver: 25,
                    flow: 25,
                    caudal: 25,
                    humidity: 25,
                    windSpeed: 25,
                    windDirection: "N",
                    date: "2020-03-11",
                    hour: "11:53:02"
                },
                {
                    lat: "1",
                    long: "2",
                    idNodo: 1,
                    temperature: 16,
                    temperatureWater: 14,
                    levelRiver: 25,
                    flow: 25,
                    caudal: 25,
                    humidity: 25,
                    windSpeed: 25,
                    windDirection: "N",
                    date: "2020-03-11",
                    hour: "11:53:02"
                },
                {
                    lat: "1",
                    long: "2",
                    idNodo: 1,
                    temperature: 16,
                    temperatureWater: 14,
                    levelRiver: 25,
                    flow: 25,
                    caudal: 25,
                    humidity: 25,
                    windSpeed: 25,
                    windDirection: "N",
                    date: "2020-03-11",
                    hour: "11:53:02"
                },
                {
                    lat: "1",
                    long: "2",
                    idNodo: 1,
                    temperature: 16,
                    temperatureWater: 14,
                    levelRiver: 25,
                    flow: 25,
                    caudal: 25,
                    humidity: 25,
                    windSpeed: 25,
                    windDirection: "N",
                    date: "2020-03-11",
                    hour: "11:53:02"
                },
                {
                    lat: "1",
                    long: "2",
                    idNodo: 1,
                    temperature: 16,
                    temperatureWater: 14,
                    levelRiver: 25,
                    flow: 25,
                    caudal: 25,
                    humidity: 25,
                    windSpeed: 25,
                    windDirection: "N",
                    date: "2020-03-11",
                    hour: "11:53:02"
                },],
            climateData: [],
            Riverdata: [],
            status: false
        }
        this.httpInstance = axios.create({
            baseURL: "https://xme9h9w868.execute-api.us-east-1.amazonaws.com/get1",
            timeout: 10000,
            headers: { 'Content-Type': 'application/json' }
        });

    }

    componentDidMount () {


        this.httpInstance.get('/getnodes').then(respuesta => {
            if (respuesta.status === 200) {
                // console.log(respuesta.data.body);
                this.setState({ criticalNodes: respuesta.data.body.length });
                var result = []
                for (var i in respuesta.data.body) {
                    result.push({ node: respuesta.data.body[i].NumNodo });
                }
                this.setState({ optionNodes: result });
                this.setState({ status: true });


            } else {
                console.log(respuesta);
            }
        });

    }

    searchNode = () => {
        console.log(this.state.selectedNode);
        this.httpInstance.post('/getonenode', { "node": this.state.selectedNode }
        ).then(respuesta => {
            if (respuesta.status === 200) {
                console.log(respuesta.data.body.resultData);

                for (var i in respuesta.data.body.resultData) {

                    var item = respuesta.data.body.resultData[i];

                    this.state.climateData.push({
                        "idNodo": respuesta.data.body.resultnode[0].NumNodo,
                        "temperature": item.Temperatura,
                        "humidity": item.Humedad,
                        "windSpeed": item.Vel_viento,
                        "windDirection": item.Dir_Viento,
                        "date": item.Fecha,
                        "Hour": item.Hora
                    });

                    this.state.Riverdata.push({
                        "idNodo": respuesta.data.body.resultnode[0].NumNodo,
                        "temperature": item.Temperatura_agua,
                        "levelRiver": item.Nivel_agua,
                        "flow": item.Flujo,
                        "caudal": item.Caudal,
                        "date": item.Fecha,
                        "Hour": item.Hora
                    })
                    this.setState({ lat: respuesta.data.body.resultnode[0].Latitud, long: respuesta.data.body.resultnode[0].Longitud })

                }

                
                console.log(this.state);
            } else {
                console.log(respuesta);
            }
        });
        
        console.log(this.state.selectedNode);
        
     
       

    }
    render () {
        if (this.state.status) {
            return (
                <div className="m-0">
                    <div className="row  mt-0">
                        <p className="h5 font-weight-bold mt-0 text-muted">Bienvenido a Smart Cities UAO</p>
                    </div>

                    <div className=" row mb-3 d-flex justify-content-center">
                        <div className="col-sm-8">
                            <div className="card p-0">
                                <div className="card-header bg-primary text-white d-flex ">
                                    <p className="m-0 align-middle">Tabla de resultados por nodo</p>
                                </div>
                                <div className="card-body">
                                    <div className="row p-1">
                                        <div className="col-6 col-sm-6 ">
                                            <p className="h6 font-weight-bold text-muted">¿Cuál nodo sensor desea consultar?</p>
                                            <div className="row">
                                                <div className="col-12 col-sm-6">
                                                    <select value={this.state.selectedNode} onChange={(event) => { this.setState({ selectedNode: event.target.value }) }} className="custom-select" id="nodeSelector">
                                                        <option defaultValue>Selecciona un nodo</option>
                                                        {this.state.optionNodes.map((option, i) => {
                                                            return (
                                                                <option key={i} value={option.node}>Nodo {option.node}</option>
                                                            );
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="col">
                                                    <button onClick={this.searchNode} className="btn btn-success p-2 text-white z-depth-0 m-0 text-right align-middle mr-auto">Consultar nodo</button>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="longitudInput">Longitud</label>
                                                <input type="text" value={this.state.long} className="form-control" id="longitudInput" readOnly />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="latitudInput">Latitud</label>
                                                <input type="text" value={this.state.lat} className="form-control" id="latitudInput" readOnly />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="  mt-0 p-0 d-flex justify-content-center">
                        <div className="col-sm-8">
                            <p className="h5 font-weight-bold mt-0 text-muted">Resultado Variables</p>
                            <p className="h6 font-weight-bold mt-2 text-muted">Variables Climatológicas</p>
                        </div>

                    </div>

                    <div className=" p-0 d-flex justify-content-center">

                        <div className="col-sm-8 m-0">
                            <DataTable tableData={this.state.climateData}
                                headingColumns={['ID Nodo', 'Temperatura', 'Humedad', 'Velocidad del viento', 'Dirección del viento', 'Fecha', 'Hora']} />
                        </div>

                    </div>

                    <div className="  mt-0 p-0 d-flex justify-content-center">
                        <div className="col-sm-8">
                            <p className="h6 font-weight-bold mt-2 text-muted">Variables del Río</p>
                        </div>

                    </div>

                    <div className=" mb-3 d-flex justify-content-center">
                        <div className="col-sm-8 mb-6">
                            <DataTable tableData={this.state.Riverdata}
                                headingColumns={['ID Nodo', 'Temperatura del río', 'Nivel de agua', 'Caudal', 'Flujo', 'Fecha', 'Hora']} />
                        </div>

                    </div>
                </div>

            );
        } else {
            return (
                <div>
                    cargando
                </div>
            );
        }
    }
}

export default InfoTable;