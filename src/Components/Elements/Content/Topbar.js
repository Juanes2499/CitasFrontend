import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";

const Topbar = ({ toggleSidebar }, props) => {

  return (
    <nav className="navbar  sticky-top shadow-sm p-3 mb-5 grey lighten-5 navbar-expand-sm o-nav  rounded">
      <button
        className="btn p-0 btn-primary z-depth-0  btn-lg text-light   rounded  o-btns"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon={faAlignLeft} />
      </button>
      <div
        className=" ml-auto justify-content-lg-end"
        id="navbar-menu"
      >
        <a className="btn m-0 btn-link text-muted font-weight-bold p-1 ml-3" href="/API">API</a>
        <a className="btn m-0 btn-link text-muted font-weight-bold p-1 ml-3 mr-3" href="/HomePage">Información</a>
      </div>
    </nav>
  );
};

export default Topbar;
