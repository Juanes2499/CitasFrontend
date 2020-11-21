import React, { Component } from 'react';
import DataTable from "../../Elements/Table/DataTable";
class InfoTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            <DataTable tableData ={this.state.driversData }
        headingColumns = { ['#', 'Name', 'Team', 'Country', 'Date of birth', 'Place of birth']}/>
        );
    }
}

export default InfoTable;