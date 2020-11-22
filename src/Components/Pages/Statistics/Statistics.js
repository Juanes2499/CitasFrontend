import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import Accordion from "../../Elements/Accordion/Accordion3";
class Statistics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: "", month: "", day: "", node: "", dataLine: {
                labels: ["Monday", "February", "March", "April", "May", "June", "July", "Monday", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First dataset",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: "rgba(225, 204,230, .3)",
                        borderColor: "rgb(205, 130, 158)",
                        borderCapStyle: "butt",
                        borderDash: [],
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
                        data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40]
                    },
                ]
            }
        }
    }
    render() {

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
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-sm-2 ">
                                        <label className="sr-only" htmlFor="inlineFormInputGroup">Mes</label>
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">Mes</div>
                                            </div>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-sm-2 ">
                                        <label className="sr-only" htmlFor="inlineFormInputGroup">Día</label>
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">Día</div>
                                            </div>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-4 col-sm-3 ">
                                        <select class="custom-select" id="nodeSelector">
                                            <option selected>Seleccionar nodo</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div className="col col-sm-1">
                                        <button className="btn btn-success p-2 text-white z-depth-0 m-0 text-right align-middle mr-auto">Consultar</button>
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
    }

}

export default Statistics;