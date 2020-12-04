import React, { Component } from 'react';
import Navbar from "../../Elements/Navbar/Navbar";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import axios from 'axios';
import {API_HOST} from './../../../varenv';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';
import moment from "moment";
import 'moment/locale/es';
import MedicamentosHomeImg from "../../../Imgs/MedicamentosHome.jpg"

import {
    GridComponent,
    ColumnDirective,
    ColumnsDirective,
    Page,
    Filter,
    Inject,
    FilterSettingsModel,
    Grid
  } from '@syncfusion/ej2-react-grids';

class MedicamentosHome extends Component{
    
    state = { 
        data_tabla_medicamento: [],
    };
    
    componentDidMount = () =>{
        this.ConsultarMedicamentos()
    }
   
    SetStateDatosMedicamentos = (data) => {
        this.setState({ data_tabla_medicamento: data });
        console.log(this.state.data_tabla_medicamento);
    };

    ConsultarMedicamentos = () =>{
        Promise.all([
            axios.get(`${API_HOST}/api/medicamentos`)
        ]).then(([rp1])=>{
            console.log(rp1)
            var data = rp1.data.data.map((a, indice) => ({ ...a, Id: indice + 1 }))
            console.log(data);
            this.SetStateDatosMedicamentos(data)
        }).catch((err)=>{
            console.log(err)
            alert("No se ha podido obetener los datos de los medicamentos por favor ponerse en contanto con un agente.");
        })
    }

    render(){
        return(
            <div className="w-100 o-container-info-api h-100 m-0 p-0">
                <Navbar />
                <img src={MedicamentosHomeImg} alt="Background of a City"  className="cropImeMed"  />
                <br/>
                <div className="CuadroMedicamento">
                    <h1 className="TitTablas">Nuestros medicamentos...</h1>
                    <br/>
                    <GridComponent dataSource={this.state.data_tabla_medicamento}
                        allowPaging={true}
                        allowFiltering={true}
                        pageSettings={{ pageSize: 6 }}
                        allowTextWrap={true}
                    >
                        <ColumnsDirective>
                            <ColumnDirective field='tipo_medicamento' headerText='Tipo' width='100' isPrimaryKey={true} />
                            <ColumnDirective field='nombre_medicamento' headerText='Nombre' width='150' />
                            <ColumnDirective field='descripcion_med' headerText='Descripción' width='150' />
                            <ColumnDirective field='precio_med' headerText='Precio' width='150'/>
                            <ColumnDirective field='proveedor' headerText='Proveedor' width='150'/>
                            <ColumnDirective field='stock_med' headerText='Stock' width='150'/>
                        </ColumnsDirective>
                        <Inject services={[Page, Filter]} />
                    </GridComponent>
                </div>
            </div>
        )
    }
}


export default MedicamentosHome;
