import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faAlignRight } from "@fortawesome/free-solid-svg-icons";

const deleteUser = (props) => {
  localStorage.setItem(
    "login",
    ""
  );

  console.log(localStorage.getItem("login"))
}
const Topbar = ({ toggleSidebar }, props) => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

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
        <button className="btn m-0 o-close-button z-depth-0 btn-danger" onClick={deleteUser} ><a className="" href="/Login">Cerrar sesión</a></button>
      </div>
    </nav>
  );
};

export default Topbar;
