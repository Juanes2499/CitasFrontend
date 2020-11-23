import React, { Component } from 'react';
import DataTable from "../../Elements/Table/DataTable";
class InfoTable extends Component {
    constructor(props) {
        super(props);
        this.searchNode = this.searchNode.bind(this);
        this.state = {
            selectedNode: "",
            lat: "",
            long: "",
            optionNodes: [
                { node: 1 }, { node: 2 }, { node: 3 }, { node: 4 }]
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
            Riverdata: []
        }
    }

    searchNode = () => {
        this.state.climateData = []
        this.state.Riverdata = []
        console.log(this.state.selectedNode);
        var data = this.state.rawData;
        var [lastItem] = data.slice(-1)
        this.setState({ lat: lastItem.lat, long: lastItem.long })
        console.log(lastItem);
        for (var i in data) {
            
            var item = data[i];

            this.state.climateData.push({
                "idNodo": item.idNodo,
                "temperature": item.temperature,
                "humidity": item.humidity,
                "windSpeed": item.windSpeed,
                "windDirection": item.windDirection,
                "date": item.date,
                "Hour": item.hour
            });

            this.state.Riverdata.push({
                "idNodo": item.idNodo,
                "temperature": item.temperatureWater,
                "levelRiver": item.levelRiver,
                "flow": item.flow,
                "caudal": item.caudal,
                "date": item.date,
                "Hour": item.hour
            });
        }
       
    }
    render() {
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
                                                    <option defaultValue>Todos los nodos</option>
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
    }
}

export default InfoTable;