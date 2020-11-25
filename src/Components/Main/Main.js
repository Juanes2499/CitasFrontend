import React, { Component } from "react";
import { Switch, Route, Redirect, } from "react-router-dom";
import Loged from "../Pages/Loged/Dashboard";
import HomePage from "../Pages/Login/HomePage";
import apiPage from "../Pages/Login/apiPage";

class Main extends Component {


  //El metodo de redireccionamiento.

  render () {
    return (
      <div className="o-container-main">
        <Switch>

          <Route path="/Dashboard" component={Loged} />
          <Route path="/API" component={apiPage} />
          <Route path="/HomePage" component={HomePage} />
          <Redirect to="/Dashboard/Home" />

        </Switch>
      </div>
    );
  }

}
export default Main;
