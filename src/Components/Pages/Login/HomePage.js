import React from "react";
import Navbar from "../../Elements/Navbar/Navbar";
import City from "../../../Logos/Inicio_IMG_Principal2.jpg";

const HomePage = () => {
    
    return (
        <div className="w-100 h-100 m-0 p-0">
            <Navbar />
            <img src={City} alt="Background of a City" className="h-50 w-100" />
        </div>
    )
}

export default HomePage;