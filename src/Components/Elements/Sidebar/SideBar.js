import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMap,
  faWrench,
  faTachometerAlt,
  faPlus,
  faTh,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../Logos/AdminLTELogo.png";

const SideBar = ({ isOpen, toggle }) => {

  return (
    <div id="sidebar" className={classNames("sidebar special-color-dark", { "is-open": isOpen })}>
      <div className="sidebar-header">
        <span color="info" onClick={toggle} style={{ color: "#fff" }}>
          &times;
      </span>
        <p className="font-italic"><img src={Logo} width="30" className="mr-2" alt="Logo" />Smart Cities UAO</p>
      </div>
      <div className="side-menu">
        <div className="list-unstyled pb-3">

          <NavLink activeClassName="active" to="/Dashboard/Home">
            <div className="nav-item">
              <li tag={Link} to={"/Dashboard/Home"}>

                <button className="btn o-link-btn z-depth-0 font-weight-bold " >
                  <FontAwesomeIcon icon={faMap} className="mr-2" />
              Home
              </button>


              </li>
            </div>
          </NavLink>

          <NavLink activeClassName="active" to="/Dashboard/DataTable">
            <div className="nav-item">
              <li tag={Link} to={"/Dashboard/DataTable"}>

                <button className="btn z-depth-0  o-link-btn  font-weight-bold ">
                  <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />
                Tabla de datos
              </button>

              </li>
            </div>
          </NavLink>

          <NavLink activeClassName="active" to="/Dashboard/Statistics">
            <div className="nav-item">
              <li tag={Link} to={"/Dashboard/Statistics"}>

                <button className="btn z-depth-0  o-link-btn  font-weight-bold ">
                  <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                  Estadísticas
              </button>

              </li>
            </div>
          </NavLink>

          <NavLink activeClassName="active" to="/Dashboard/SensorNode">
            <div className="nav-item">
              <li tag={Link} to={"/Dashboard/SensorNode"}>

                <button className="btn z-depth-0  o-link-btn  font-weight-bold " >
                  <FontAwesomeIcon icon={faTh} className="mr-2" />
                Nodo Sensor
              </button>

              </li>
            </div>
          </NavLink>

          <NavLink activeClassName="active" to="/Dashboard/NodeConfiguration">
            <div className="nav-item"  >
              <li tag={Link} to={"/Dashboard/NodeConfiguration"}>
                <button className="btn z-depth-0  o-link-btn  font-weight-bold " >
                  <FontAwesomeIcon icon={faWrench} className="mr-2" />
                Configuración nodo sensor
              </button>
              </li>
            </div>
          </NavLink>

          <NavLink activeClassName="active" to="/Dashboard/AddNode">
            <div className="nav-item">
              <li tag={Link} to={"/Dashboard/AddNode"}>
                <button className="btn z-depth-0  o-link-btn  font-weight-bold ">
                  <FontAwesomeIcon icon={faPlus} className="mr-2" />
                Agregar nodo sensor
              </button>

              </li>
            </div>
          </NavLink>
        </div>

      </div>
    </div>)
};

export default SideBar;
