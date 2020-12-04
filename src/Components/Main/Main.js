import React, { Component } from "react";
import { Switch, Route, Redirect, } from "react-router-dom";
import Loged from "../Pages/Loged/Dashboard";
import HomePage from "../Pages/Login/HomePage";
import apiPage from "../Pages/Login/apiPage";

import Home from '../Pages/HomePage/Home';
import MedicamentosHome from '../Pages/Medicamentos/MedicamentosHome';
import DashboradUser from '../Pages/DashboardUser/DashboradUser';

class Main extends Component {


  //El metodo de redireccionamiento.

  render () {
    return (
      <div className="o-container-main">
        <Switch>
          <Route path="/Home" component={Home}/>
          <Route path="/MedicamentosHome" component={MedicamentosHome}/>
          <Route path="/DashboardUser" component={DashboradUser}/>

          <Redirect to ="/Home"/>
          <Route path="/Dashboard" component={Loged} />
        </Switch>
      </div>
    );
  }

}
export default Main;
