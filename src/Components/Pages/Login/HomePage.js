import React from "react";
import Navbar from "../../Elements/Navbar/Navbar";
import City from "../../../Logos/Inicio_IMG_Principal2.jpg";
import Map from "../../../Logos/Index1.png";
import EC1 from "../../../Logos/EC1.png";
import EC2 from "../../../Logos/EC2.png";
import EC3 from "../../../Logos/EC3.png";

const HomePage = () => {
    
    return (
        <div className="w-100 o-container-info-api h-100 m-0 p-0">
            <Navbar />
            <img src={City} alt="Background of a City" className="h-50 w-100" />
            
                <div className="row mt-4 mb-4 d-flex justify-content-center">
                    <div className="col-12 col-sm-6">
                        <p className="h3 font-weight-bold">Bienvenidos a Smart City UAO</p>
                    </div>
                </div>
            <div className="row mt-2">
                <div className="col-12 col-sm-3 d-flex justify-content-lg-end">

                </div>
                    <div className="col-12 col-sm-3 d-flex justify-content-lg-end">
                    <p className="h6 font-weight-bold ">Smart City UAO es una solución de ciudad inteligente que ayuda
                    a controlar los problemas de inundación ocasionados por el río Jarillón ubicado en la zona oriente de la ciudad.
                        <p className="font-weight-light mt-4 ">En épocas lluviosas se presentan serios problemas de inundaciones en zonas
                        del oriente de la ciudad y pueblos aledaños a esta afectando las viviendas de los habitantes, la movilidad, los
                        cultivos, la energía misma del lugar. Se planta crear un sistema alrededor del río cauca con el fin de realizar un control
                        preciso y adecuado para evitar futuras inundaciones en dichas zonas. Se hará la trnasmisión de los datos de las variables de gran
                        relevancia por medio inalámbrico que pueda afectar el mismo con el objetivo de brindar servicios de información en tiempo real y hacer
                        un procedimiento adecuado para generar una base estadística que permita mayor eficiencia de respuesta, actos inmediatos por parte de los entes
                    gubernamentales y toma de desiciones en situaciones de emergencia. </p></p>
                    
                    </div>
                    <div className="col-12 col-sm-6">
                    <img src={Map} alt="Background of a City" />

                    </div>
            </div>
            <div className="row mt-4 mb-4 d-flex justify-content-center">
                <div className="col-12 col-sm-6">
                    <p className="h5 font-weight-bold">Resultados estadísticos de Cali como ciudad inteligente a nivel mundial</p>
                    <p className="h6 mt-3 font-weight-bold">Actualmente Cali ocupa el puesto 148 a nivel mundial y el puesto 3 en Colombia</p>
                </div>
            </div>
            <div className="row mt-4 mb-4 d-flex justify-content-center">
                <img src={EC1} alt="Background of a City" />
                <img src={EC2} alt="Background of a City" />
                <img src={EC3} alt="Background of a City" />
            </div>
                </div>
    )
}

export default HomePage;