import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import Accordion from "../../Elements/Accordion/Accordion3";
import axios from "axios";

class Statistics extends Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.update = this.update.bind(this);
        this.state = {
            selectedNode: "",
            optionNodes: []
            ,
            year: "", month: "", day: "", node: "",
            test: [{
                idnode: "1",
                numnode: 1,
                lat: "3"
            },
            {
                idnode: "1",
                numnode: 1,
                lat: "3"
            },
            {
                idnode: "1",
                numnode:1,
                lat: "3"
            }],
            dataLine: {
                labels: ["Monday", "February", "March", "April", "May", "June", "July", "Monday", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: "rgba(225, 204,230, .3)",
                        borderColor: "rgb(205, 130, 158)",
                        borderCapStyle: "butt",
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgb(205, 130,1 58)",
                        pointBackgroundColor: "rgb(255, 255, 255)",
                        pointBorderWidth: 10,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgb(0, 0, 0)",
                        pointHoverBorderColor: "rgba(220, 220, 220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
                        
                    },
                ]
            },
            dataAmbientTemperature: {
                labels: [], datasets: [{
                    label: "",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(225, 204,230, .3)",
                    borderColor: "rgb(205, 130, 158)",
                    borderCapStyle: "butt",
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(205, 130,1 58)",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],

                }] },
            dataHumidity: { labels: [], datasets: [] },
            dataWindSpeed: { labels: [], datasets: [] },
            dataRiverTemperature: { labels: [], datasets: [] },
            dataRiverHeight: { labels: [], datasets: [] },
            dataFlow: { labels: [], datasets: [] },
            dataCaudal: { labels: [], datasets: [] },
            status: false,
            
        }
        this.httpInstance = axios.create({
            baseURL: "https://xme9h9w868.execute-api.us-east-1.amazonaws.com/get1",
            timeout: 10000,
            headers: { 'Content-Type': 'application/json' }
        });
    }
    
    componentDidMount() {


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
    componentDidMount() {


        this.httpInstance.get('/getnodes').then(respuesta => {
            if (respuesta.status === 200) {
                // console.log(respuesta.data.body);
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
    update = (name, e) => {
        this.setState({ [name]: e.target.value });
    };
    search() {
        console.log("year: " + this.state.year + " month: " + this.state.month + " day: " + this.state.day);
        var data1 = this.state.test;
        var test2 = []

        for (var i in data1 ) {
            this.state.dataAmbientTemperature.datasets[0].data.push(data1[i].numnode);
            console.log("Source: " + data1[i].numnode);
            console.log("Target: " + data1[i].lat);
        }
        console.log(this.state.dataAmbientTemperature.datasets[0].data)
    }
    render() {
        if (this.state.status) {
            return (
                <div className="p-2 mb-4">
                    <div className="row  mt-0">
                        <p className="h5 font-weight-bold mt-0 text-muted">Bienvenido a Smart Cities UAO</p>
                    </div>
                    <div className="row  d-flex justify-content-center">
                        <div className="col-sm-10">
                            <div className="card p-0">
                                <div className="card-header bg-primary text-white d-flex ">
                                    <p className="m-0 align-middle">Tabla de resultados por nodo</p>
                                </div>
                                <div className="card-body">
                                    <div className="row p-1">
                                        <div className="col-4 col-sm-2 ">
                                            <label className="sr-only" htmlFor="inlineFormInputGroup">Año</label>
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">Año</div>
                                                </div>
                                                <input type="text" onChange={(e) => this.update("year", e)} value={this.state.year} className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-4 col-sm-2 ">
                                            <label className="sr-only" htmlFor="inlineFormInputGroup">Mes</label>
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">Mes</div>
                                                </div>
                                                <input type="text" onChange={(e) => this.update("month", e)} value={this.state.month} className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-4 col-sm-2 ">
                                            <label className="sr-only" htmlFor="inlineFormInputGroup">Día</label>
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">Día</div>
                                                </div>
                                                <input type="text" onChange={(e) => this.update("day", e)} value={this.state.day} className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-4 col-sm-3 ">
                                            <select value={this.state.selectedNode} onChange={(e) => this.update("selectedNode", e)} className="custom-select" id="nodeSelector">
                                                <option defaultValue>Todos los nodos</option>
                                                {this.state.optionNodes.map((option, i) => {
                                                    return (
                                                        <option key={i} value={option.node}>Nodo {option.node}</option>
                                                    );
                                                })}
                                            </select>
                                        </div>
                                        <div className="col col-sm-1">
                                            <button onClick={this.search} className="btn btn-success p-2 text-white z-depth-0 m-0 text-right align-middle mr-auto">Consultar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-sm-6">
                            <Accordion title="Temperatura del ambiente" color="bg-danger" icon={faChartLine}>
                                <Line data={this.state.dataLine} options={{ responsive: true }} />
                            </Accordion>
                        </div>
                        <div className="col-sm-6">
                            <Accordion title="Humedad" color="bg-primary" icon={faChartLine}>
                                <Line data={this.state.dataLine} options={{ responsive: true }} />
                            </Accordion>
                        </div>
                        <div className="col-sm-6">
                            <Accordion title="Velocidad el viento" color="bg-warning" icon={faChartLine}>
                                <Line data={this.state.dataLine} options={{ responsive: true }} />
                            </Accordion>
                        </div>
                        <div className="col-sm-6">
                            <Accordion title="Temperatura del río" color="bg-success" icon={faChartLine}>
                                <Line data={this.state.dataLine} options={{ responsive: true }} />
                            </Accordion>
                        </div>
                        <div className="col-sm-6">
                            <Accordion title="Nivel del río" color="bg-secondary" icon={faChartLine}>
                                <Line data={this.state.dataLine} options={{ responsive: true }} />
                            </Accordion>
                        </div>
                        <div className="col-sm-6">
                            <Accordion title="Flujo" color="default-color-dark" icon={faChartLine}>
                                <Line data={this.state.dataLine} options={{ responsive: true }} />
                            </Accordion>
                        </div>
                        <div className="col-sm-6">
                            <Accordion title="Caudal" color="amber darken-2" icon={faChartLine}>
                                <Line data={this.state.dataLine} options={{ responsive: true }} />
                            </Accordion>
                        </div>
                    </div>


                </div>
            )
        } else {
            return (
                <div>Cargando...</div>
            )
        }
        
    }

}

export default Statistics;