import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = (props) => {
    const [navbarIsOpen, setNavbarOpen] = useState(true);
    const toggleNavbar = () => setNavbarOpen(!navbarIsOpen);

    return (
        <nav className="navbar  sticky-top shadow-sm mb-5 navbar-expand-sm o-navbar ">
            <a className="navbar-brand" href="/Login">
                <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="Logo"/>
            </a>
            <button
                className="navbar-toggler btn btn-lg text-secondary border p-3 rounded o-btns"
                data-toggle="collapse"
                aria-label="Toggle navigation"
                onClick={toggleNavbar}
            >
                <FontAwesomeIcon icon={faAlignJustify} />
            </button>
            <div
                className={`${navbarIsOpen ? "collapse" : ""
                    } navbar-collapse justify-content-lg-end`}
                id="navbar-menu"
            >
                <a className="nav-link o-navbar-links font-weight-bold" href="#">Inicio</a>
                <a className="nav-link o-navbar-links font-weight-bold" href="#">Quienes somos?</a>
                <a className="nav-link o-navbar-links font-weight-bold" href="/Login">Iniciar sesión</a>

            </div>
        </nav>
    );
};

export default Navbar;
