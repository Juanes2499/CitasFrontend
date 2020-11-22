import React, { Component } from 'react';
import DataTable from "../../Elements/Table/DataTable";
class InfoTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            climateDate: [
                {
                    idNodo: 1,
                    temperature: 16,
                    humedad: 25,
                    velocidadViento: 25,
                    direccionViento: "N",
                    Fecha: "2020-03-11",
                    Hora: "11:53:02"

                },
                {
                    idNodo: 1,
                    temperature: 16,
                    humedad: 25,
                    velocidadViento: 25,
                    direccionViento: "N",
                    Fecha: "2020-03-11",
                    Hora: "11:53:02"

                },
                {
                    idNodo: 1,
                    temperature: 16,
                    humedad: 25,
                    velocidadViento: 25,
                    direccionViento: "N",
                    Fecha: "2020-03-11",
                    Hora: "11:53:02"

                },
                {
                    idNodo: 1,
                    temperature: 16,
                    humedad: 25,
                    velocidadViento: 25,
                    direccionViento: "N",
                    Fecha: "2020-03-11",
                    Hora: "11:53:02"

                },
                {
                    idNodo: 1,
                    temperature: 16,
                    humedad: 25,
                    velocidadViento: 25,
                    direccionViento: "N",
                    Fecha: "2020-03-11",
                    Hora: "11:53:02"

                },
                {
                    idNodo: 1,
                    temperature: 16,
                    humedad: 25,
                    velocidadViento: 25,
                    direccionViento: "N",
                    Fecha: "2020-03-11",
                    Hora: "11:53:02"

                },
                {
                    idNodo: 1,
                    temperature: 16,
                    humedad: 25,
                    velocidadViento: 25,
                    direccionViento: "N",
                    Fecha: "2020-03-11",
                    Hora: "11:53:02"

                },
                {
                    idNodo: 1,
                    temperature: 16,
                    humedad: 25,
                    velocidadViento: 25,
                    direccionViento: "N",
                    Fecha: "2020-03-11",
                    Hora: "11:53:02"

                },
                {
                    idNodo: 1,
                    temperature: 16,
                    humedad: 25,
                    velocidadViento: 25,
                    direccionViento: "N",
                    Fecha: "2020-03-11",
                    Hora: "11:53:02"

                },
                {
                    idNodo: 1,
                    temperature: 16,
                    humedad: 25,
                    velocidadViento: 25,
                    direccionViento: "N",
                    Fecha: "2020-03-11",
                    Hora: "11:53:02"

                },
                {
                    idNodo: 1,
                    temperature: 16,
                    humedad: 25,
                    velocidadViento: 25,
                    direccionViento: "N",
                    Fecha: "2020-03-11",
                    Hora: "11:23:02"

                },
                {
                    idNodo: 1,
                    temperature: 16,
                    humedad: 25,
                    velocidadViento: 25,
                    direccionViento: "N",
                    Fecha: "2020-03-11",
                    Hora: "11:53:02"

                },
                {
                    idNodo: 1,
                    temperature: 16,
                    humedad: 25,
                    velocidadViento: 25,
                    direccionViento: "N",
                    Fecha: "2020-03-11",
                    Hora: "11:26:02"

                },
                {
                    idNodo: 1,
                    temperature: 16,
                    humedad: 25,
                    velocidadViento: 25,
                    direccionViento: "N",
                    Fecha: "2020-03-11",
                    Hora: "11:13:02"

                },
                {
                    idNodo: 1,
                    temperature: 16,
                    humedad: 25,
                    velocidadViento: 25,
                    direccionViento: "N",
                    Fecha: "2020-03-11",
                    Hora: "11:33:02"

                },
                {
                    idNodo: 1,
                    temperature: 16,
                    humedad: 25,
                    velocidadViento: 25,
                    direccionViento: "N",
                    Fecha: "2020-03-11",
                    Hora: "11:43:02"

                },
                {
                    idNodo: 1,
                    temperature: 16,
                    humedad: 25,
                    velocidadViento: 25,
                    direccionViento: "N",
                    Fecha: "2020-03-11",
                    Hora: "11:13:02"

                },
                {
                    idNodo: 1,
                    temperature: 16,
                    humedad: 25,
                    velocidadViento: 25,
                    direccionViento: "N",
                    Fecha: "2020-03-11",
                    Hora: "11:33:02"

                },
                {
                    idNodo: 1,
                    temperature: 16,
                    humedad: 25,
                    velocidadViento: 25,
                    direccionViento: "N",
                    Fecha: "2020-03-11",
                    Hora: "11:43:02"

                },
                {
                    idNodo: 1,
                    temperature: 16,
                    humedad: 25,
                    velocidadViento: 25,
                    direccionViento: "N",
                    Fecha: "2020-03-11",
                    Hora: "11:11:02"

                },
                {
                    idNodo: 1,
                    temperature: 16,
                    humedad: 25,
                    velocidadViento: 25,
                    direccionViento: "N",
                    Fecha: "2020-03-11",
                    Hora: "11:12:02"

                },
                {
                    idNodo: 1,
                    temperature: 16,
                    humedad: 25,
                    velocidadViento: 25,
                    direccionViento: "N",
                    Fecha: "2020-03-11",
                    Hora: "11:13:02"

                },
            ],
            driversData :[
                {
                    number: 44,
                    name: 'Lewis Hamilton',
                    team: 'Mercedes',
                    country: 'United Kingdom',
                    dob: '07/01/1985',
                    placeOfBirth: 'Stevenage, England'
                },
                {
                    number: 77,
                    name: 'Valtteri Bottas',
                    team: 'Mercedes',
                    country: 'Finland',
                    dob: '28/08/1989',
                    placeOfBirth: 'Nastola, Finland'
                }, {
                    number: 26,
                    name: 'Daniil Kvyat',
                    team: 'AlphaTauri',
                    country: 'Russian Federation',
                    dob: '26/04/1994',
                    placeOfBirth: 'Ufa, Russia'
                },
                {
                    number: 11,
                    name: 'Sergio Perez',
                    team: '	Racing Point',
                    country: 'Mexico',
                    dob: '26/01/1990',
                    placeOfBirth: 'Guadalajara, Mexico'
                },
                {
                    number: 18,
                    name: 'Lance Stroll',
                    team: '	Racing Point',
                    country: 'Canada',
                    dob: '29/10/1998',
                    placeOfBirth: 'Montreal, Canada'
                },
                {
                    number: 7,
                    name: 'Kimi Räikkönen',
                    team: 'Alfa Romeo',
                    country: 'Finland',
                    dob: '17/10/1979',
                    placeOfBirth: 'Espoo, Finland'
                },
                {
                    number: 99,
                    name: 'Antonio Giovinazzi',
                    team: 'Alfa Romeo',
                    country: 'Italy',
                    dob: '14/12/1993',
                    placeOfBirth: 'Martina Franca, Italy'
                },
                {
                    number: 20,
                    name: 'Kevin Magnussen',
                    team: 'Haas',
                    country: 'Denmark',
                    dob: '05/10/1992',
                    placeOfBirth: 'Roskilde, Denmark'
                },
                {
                    number: 8,
                    name: 'Romain Grosjean',
                    team: 'Haas',
                    country: 'France',
                    dob: '17/04/1986',
                    placeOfBirth: 'Geneva, Switzerland'
                },
            ]
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
                                                <select class="custom-select" id="nodeSelector">
                                                    <option selected>Todos los nodos</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div className="col">
                                                <button className="btn btn-success p-2 text-white z-depth-0 m-0 text-right align-middle mr-auto">Consultar nodo</button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="longitudInput">Longitud</label>
                                            <input type="text" className="form-control" id="longitudInput" readOnly/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="latitudInput">Latitud</label>
                                            <input type="text" className="form-control" id="latitudInput" readOnly />
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
                        <DataTable tableData={this.state.climateDate}
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
                        <DataTable tableData={this.state.climateDate}
                            headingColumns={['ID Nodo', 'Temperatura del río', 'Nivel de agua', 'Caudal', 'Flujo', 'Fecha', 'Hora']} />
                    </div>

                </div>
            </div>
           
        );
    }
}

export default InfoTable;