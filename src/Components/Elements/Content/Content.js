import React from "react";
import classNames from "classnames";

import { Switch, Route } from "react-router-dom";
import Topbar from "./Topbar"
import Statistics from "../../Pages/Statistics/Statistics";
import SensorNode from "../../Pages/SensorNode/SensorNode";
import Loged from "../../Pages/Loged/Dashboard";
import InfoTable from "../../Pages/DataTable/InfoTable";
import AddNode from "../../Pages/AddNode/AddNode";
import NodeConfiguration from "../../Pages/NodeConfiguration/NodeConfiguration";
import UserInfo from "../../Pages/UserInfo/UserInfo";
import Home from "../../Pages/Home/Home";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "./Content.css";

const Content = ({ sidebarIsOpen, toggleSidebar }) => (

  <div className="w-100 m-0 p-0">
    <Topbar toggleSidebar={toggleSidebar} />

    <div
      className={classNames("content  container-fluid", {
        "is-open": sidebarIsOpen,
      })}
    >

      <Switch>
        <Route exact path="/Dashboard/Home" component={Home} />
        <Route exact path="/Dashboard/DataTable" component={InfoTable} />
        <Route exact path="/Dashboard/AddNode" component={AddNode} />
        <Route exact path="Dashboard" component={Loged} />
        <Route exact path="/Dashboard/Statistics" component={Statistics} />
        <Route exact path="/Dashboard/SensorNode" component={SensorNode} />
        <Route exact path="/Dashboard/User" component={UserInfo} />
        <Route exact path="/Dashboard/NodeConfiguration" component={NodeConfiguration} />
      </Switch>
    </div>
  </div>
);

export default Content;
