import React from "react";
import classNames from "classnames";
import "./Content.css";
import { Switch, Route } from "react-router-dom";
import Topbar from "./Topbar";
import Documentation from "../../Pages/Documentation/Documentation";
import Doc2 from "../../Pages/Documentation/Doc2";
import Loged from "../../Pages/Loged/Dashboard";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <div className="container p-0">
  <Topbar toggleSidebar={toggleSidebar} />
  
  <div
    className={classNames("content container-fluid", {
      "is-open": sidebarIsOpen,
    })}
  >
    
    <Switch>
      <Route exact path="/Dashboard/Desktop" component={() => "Escritorio"} />
      <Route exact path="/Dashboard/Projects" component={() => "Escritorio"} />
      <Route exact path="/Dashboard/Projects/CreateProject" component={() => "Escritorio"} />

      <Route exact path="/Dashboard/Projects/Documentation" component={Documentation} />
      <Route exact path="/Dashboard/Contacts" component={() => "Contactos"} />
      <Route
        exact
        path="/Dashboard/SearchContacts"
        component={() => "Búsqueda de Contactos"}
      />
      <Route exact path="Dashboard" component={Loged}/>
      <Route exact path="/Dashboard/Projects/Documentation2" component={Doc2} />
      <Route exact path="/Dashboard/Calendar" component={() => "Escritorio"} />
      </Switch>
    </div>
  </div>
);

export default Content;
