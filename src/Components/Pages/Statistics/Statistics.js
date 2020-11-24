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
            optionNodes: [],
            graficar: false

            ,
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

                    },
                ]
            },
            dataAmbientTemperature: { labels: [], datasets: [] },
            dataHumidity: { labels: [], datasets: [] },
            dataWindSpeed: { labels: [], datasets: [] },
            dataRiverTemperature: { labels: [], datasets: [] },
            dataRiverHeight: { labels: [], datasets: [] },
            dataFlow: { labels: [], datasets: [] },
            dataCaudal: { labels: [], datasets: [] },
            status: false,
            status2: false

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
                this.setState({ optionNodes: respuesta.data.body, status: true });
            } else {
                console.log(respuesta);
            }
        });

    }

    update = (name, e) => {

        this.setState({ [name]: e.target.value });
    };
    search() {
        this.setState({
            dataAmbientTemperature: { labels: [], datasets: [] }, dataHumidity: { labels: [], datasets: [] },
            dataWindSpeed: { labels: [], datasets: [] }, dataRiverTemperature: { labels: [], datasets: [] },
            dataRiverHeight: { labels: [], datasets: [] }, dataFlow: { labels: [], datasets: [] },
            dataCaudal: { labels: [], datasets: [] }
        });

        var tem = [];
        var hum = [];
        var velv = [];
        var tema = [];
        var cau = [];
        var nagua = [];
        var flu = [];
        var fe = [];
        var ho = [];
        var date = [];



        this.httpInstance.post('/getonenode', { node: this.state.selectedNode }).then(res => {
            for (var i in res.data.body.resultData) {
                tem.push(res.data.body.resultData[i].Temperatura);
                hum.push(res.data.body.resultData[i].Humedad);
                velv.push(res.data.body.resultData[i].Vel_viento);
                tema.push(res.data.body.resultData[i].Temperatura_agua);
                cau.push(res.data.body.resultData[i].Caudal);
                nagua.push(res.data.body.resultData[i].Nivel_agua);
                flu.push(res.data.body.resultData[i].Flujo);
                fe.push((res.data.body.resultData[i].Fecha).substring(0, 10));
                ho.push((res.data.body.resultData[i].Hora).substring(0, 8));
                date.push((res.data.body.resultData[i].Fecha).substring(0, 10) + "-" + (res.data.body.resultData[i].Hora).substring(0, 8));


            }
            console.log(tem);

            this.setState({
                dataAmbientTemperature: { labels: date, datasets: [{ ...this.state.dataLine.datasets[0], data: tem }] },
                dataHumidity: { labels: date, datasets: [{ ...this.state.dataLine.datasets[0], data: hum }] },
                dataWindSpeed: { labels: date, datasets: [{ ...this.state.dataLine.datasets[0], data: velv }] },
                dataRiverTemperature: { labels: date, datasets: [{ ...this.state.dataLine.datasets[0], data: tema }] },
                dataRiverHeight: { labels: date, datasets: [{ ...this.state.dataLine.datasets[0], data: nagua }] },
                dataFlow: { labels: date, datasets: [{ ...this.state.dataLine.datasets[0], data: flu }] },
                dataCaudal: { labels: date, datasets: [{ ...this.state.dataLine.datasets[0], data: cau }] },

            })

        });
        this.setState({ status2: true });
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

                                        <div className="col-4 col-sm-3 ">
                                            <select value={this.state.selectedNode} onChange={(e) => this.update("selectedNode", e)} className="custom-select" id="nodeSelector">
                                                <option defaultValue>Seleccione un nodo</option>
                                                {this.state.optionNodes.map((option, i) => {
                                                    return (
                                                        <option key={i} value={option.NumNodo}>Nodo {option.NumNodo}</option>
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

                    <div className={(this.state.status2 ? "visible " : "invisible ") + "row mt-4"}>
                        <div className="col-sm-6">
                            <Accordion title="Temperatura del ambiente" color="bg-danger" icon={faChartLine}>
                                <Line data={this.state.dataAmbientTemperature} options={{ responsive: true }} />
                            </Accordion>
                        </div>
                        <div className="col-sm-6">
                            <Accordion title="Humedad" color="bg-primary" icon={faChartLine}>
                                <Line data={this.state.dataHumidity} options={{ responsive: true }} />
                            </Accordion>
                        </div>
                        <div className="col-sm-6">
                            <Accordion title="Velocidad el viento" color="bg-warning" icon={faChartLine}>
                                <Line data={this.state.dataWindSpeed} options={{ responsive: true }} />
                            </Accordion>
                        </div>
                        <div className="col-sm-6">
                            <Accordion title="Temperatura del río" color="bg-success" icon={faChartLine}>
                                <Line data={this.state.dataRiverTemperature} options={{ responsive: true }} />
                            </Accordion>
                        </div>
                        <div className="col-sm-6">
                            <Accordion title="Nivel del río" color="bg-secondary" icon={faChartLine}>
                                <Line data={this.state.dataRiverHeight} options={{ responsive: true }} />
                            </Accordion>
                        </div>
                        <div className="col-sm-6">
                            <Accordion title="Flujo" color="default-color-dark" icon={faChartLine}>
                                <Line data={this.state.dataFlow} options={{ responsive: true }} />
                            </Accordion>
                        </div>
                        <div className="col-sm-6">
                            <Accordion title="Caudal" color="amber darken-2" icon={faChartLine}>
                                <Line data={this.state.dataCaudal} options={{ responsive: true }} />
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