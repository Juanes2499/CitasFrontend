import React, { Component } from "react";
import { Switch, Route,  Redirect,  } from "react-router-dom";
import Login2 from "../Pages/Login/Login2";
import Loged from "../Pages/Loged/Dashboard";

class Main extends Component {
  Redirect() {
    const token = localStorage.getItem("login");
    //El metodo de redireccionamiento.
    if (token == null || token === undefined) {
      return (
      
          <Redirect to="/Login" />
      
      );
    } else {
      return (
        
        <Redirect to="/Dashboard/Desktop" />
        
      );
    }
  }
  render() {
    return (
      <div className="o-container-main">
        <Switch>
          <Route exact path="/Login" component={Login2} />
          <Route path="/Dashboard" component={Loged} />
         
          {this.Redirect()}
        </Switch>
      </div>
    );
  }
}

export default Main;
