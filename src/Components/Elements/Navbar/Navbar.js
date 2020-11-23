import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import Logo from "../../../Logos/Icon.png";

const Navbar = () => {
    const [navbarIsOpen, setNavbarOpen] = useState(true);
    const toggleNavbar = () => setNavbarOpen(!navbarIsOpen);

    return (
        <nav className="navbar  sticky-top shadow-sm  navbar-expand-sm o-navbar ">
            <a className="navbar-brand" href="/Login">
                <img src={Logo} width="100" alt="Logo" />
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
                <a className="nav-link o-navbar-links font-weight-bold" href="/HomePage">Inicio</a>
                <a className="nav-link o-navbar-links font-weight-bold" href="/apiPage">Quienes somos?</a>
                <a className="nav-link o-navbar-links font-weight-bold" href="/Login">Iniciar sesión</a>

            </div>
        </nav>
    );
};

export default Navbar;
