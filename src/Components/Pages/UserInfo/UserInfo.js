import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { id: "1", typeId: "", idNumber: "", firstnames: "", lastname: "", phone: "", email: "", address: "", job: "2", codejob: "2" };
        this.update = this.update.bind(this);
        this.updateData = this.updateData.bind(this);
    }

    updateData = () => {
        console.log(this.state);
    }

    update = (name, e) => {
        this.setState({ [name]: e.target.value });
    };

    render() {

        return (
            <div className="mb-3 mt-0">
                <div className="row  mt-0">
                    <p className="h5 font-weight-bold mt-0 text-muted">Bienvenido a Smart Cities UAO</p>
                </div>
                <div className=" d-flex justify-content-center">
                    <div className="card col-sm-8 p-0">
                        <div className="card-header bg-primary text-white d-flex ">
                            <FontAwesomeIcon icon={faAddressCard} className="m-0  align-middle mr-2" />
                            <p className="m-0 align-middle">Información del usuario</p>
                            <button type="button" onClick={this.updateData} className="btn btn-warning z-depth-0 p-2 text-dark m-0 text-right align-middle ml-auto">Actualizar datos</button>
                        </div>
                        <div className="card-body">
                            <p className="h6 font-weight-bold text-muted">Identificación usuario</p>
                            <form>
                                <div className="col-auto">
                                    <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">ID usuario</div>
                                        </div>
                                        <input type="text" value={this.state.id} className="form-control" id="inlineFormInputGroup" readOnly />
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">Tipo de Identificación</div>
                                        </div>
                                        <input type="text" onChange={(e) => this.update("typeId", e)} className="form-control" value={this.state.typeId} id="inlineFormInputGroup" placeholder="Tipo de Identificación" />
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">Número de Identificación</div>
                                        </div>
                                        <input type="text" onChange={(e) => this.update("idNumber", e)} className="form-control" value={this.state.idNumber} id="inlineFormInputGroup" placeholder="Número de Identificación" />
                                    </div>
                                </div>

                                <p className="h6 font-weight-bold text-muted">Nombres y apellidos</p>

                                <div className="col-auto">
                                    <label className="sr-only" htmlFor="inlineFormInputGroup">Nombre</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">Nombres</div>
                                        </div>
                                        <input type="text" value={this.state.firstnames} onChange={(e) => this.update("firstnames", e)} className="form-control" id="inlineFormInputGroup" placeholder="Nombre" />
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <label className="sr-only" htmlFor="inlineFormInputGroup">Apellidos</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">Apellidos</div>
                                        </div>
                                        <input type="text" value={this.state.lastname} onChange={(e) => this.update("lastname", e)} className="form-control" id="inlineFormInputGroup" placeholder="Apellidos" />
                                    </div>
                                </div>

                                <p className="h6 font-weight-bold text-muted">Contacto</p>

                                <div className="col-auto">
                                    <label className="sr-only" htmlFor="inlineFormInputGroup">Correo electrónico</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">Correo electrónico</div>
                                        </div>
                                        <input type="text" value={this.state.email} onChange={(e) => this.update("email", e)} className="form-control" id="inlineFormInputGroup" placeholder="Correo electrónico" />
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <label className="sr-only" htmlFor="inlineFormInputGroup">Celular</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">Celular</div>
                                        </div>
                                        <input type="text" value={this.state.phone} onChange={(e) => this.update("phone", e)} className="form-control" id="inlineFormInputGroup" placeholder="Celular" />
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <label className="sr-only" htmlFor="inlineFormInputGroup">Dirección</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">Dirección</div>
                                        </div>
                                        <input type="text" value={this.state.address} onChange={(e) => this.update("address", e)} className="form-control" id="inlineFormInputGroup" placeholder="Dirección" />
                                    </div>
                                </div>

                                <p className="h6 font-weight-bold text-muted">Tipo de usuario</p>

                                <div className="col-auto">
                                    <label className="sr-only" htmlFor="inlineFormInputGroup">Funcionario del gobierno</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">Funcionario del gobierno</div>
                                        </div>
                                        <input type="text" value={this.state.job} className="form-control" id="inlineFormInputGroup" readOnly/>
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <label className="sr-only" htmlFor="inlineFormInputGroup">Código funcionario</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">Código funcionario</div>
                                        </div>
                                        <input type="text" value={this.state.codejob} className="form-control" id="inlineFormInputGroup" readOnly />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }



}

export default UserInfo;
