import React from "react";
import Navbar from "../../Elements/Navbar/Navbar";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import Accordion from "../../Elements/Accordion/Accordion3";
import RC1 from "../../../Logos/RC1.png";
import RC3 from "../../../Logos/RC3.png";
import RC9 from "../../../Logos/RC9.png";

const apiPage = () => {

    return (
        <div className="w-100 o-container-info-api h-100 m-0 p-0">
            <Navbar />
            <div className="row mt-4 mb-4 d-flex justify-content-center">
                <div className="col-12 col-sm-8">
                   
                    <Accordion icon={faDatabase} color="bg-dark" title={"GET(ruta para traer todos los datos de un nodo)"}>
                        <div className="card p-4 m-0">
                            <p>Ruta: /getonenode</p>
                            <p>Content-Type: application/json</p>
                            <p>Datos de solicitud:</p>
                            <div className="row mt-4 mb-4 d-flex justify-content-center">
                                <img src={RC9} alt="Background of a City" className=" w-25 o-img-api" />
                            </div>
                            

                        </div>
                        </Accordion>
                    
                </div>
                <div className="col-12 col-sm-8">

                    <Accordion icon={faDatabase} color="bg-dark" title={"GET(ruta para leer los datos de cada nodo)"}>
                        <div className="card p-4 m-0">
                            <p>Ruta: /getnodes</p>
                            <p>Content-Type: application/json</p>
                            <p>Datos de solicitud:</p>
                            <div className="row mt-4 mb-4 d-flex justify-content-center">
                                <img src={RC9} alt="Background of a City" className=" w-25 o-img-api" />
                            </div>
                        </div>
                    </Accordion>

                </div>
                <div className="col-12 col-sm-8">

                    <Accordion icon={faDatabase} color="bg-dark" title={"GET(ruta para leer los datos promedio un nodo)"}>
                        <div className="card p-4 m-0">
                            <p>Ruta: /getavn</p>
                            <p>Content-Type: application/json</p>
                            <p>Datos de solicitud:</p>
                            <div className="row mt-4 mb-4 d-flex justify-content-center">
                                <img src={RC3} alt="Background of a City" className=" w-25 o-img-api" />
                            </div>
                        </div>
                    </Accordion>

                </div>
                <div className="col-12 col-sm-8">

                    <Accordion icon={faDatabase} color="bg-dark" title={"GET(ruta para leer los datos promedio de todos los nodos)"}>
                        <div className="card p-4 m-0">
                            <p>Ruta: /getgeneraldata</p>
                            <p>Content-Type: application/json</p>
                            <p>Datos de solicitud:</p>
                            <div className="row mt-4 mb-4 d-flex justify-content-center">
                                <img src={RC3} alt="Background of a City" className=" w-25 o-img-api" />
                            </div>
                        </div>
                    </Accordion>

                </div>
                <div className="col-12 col-sm-8">

                    <Accordion icon={faDatabase} color="bg-dark" title={"PUT(ruta para actualizar los datos de un nodo)"}>
                        <div className="card p-4 m-0">
                            <p>Ruta: /putnode</p>
                            <p>Content-Type: application/json</p>
                            <p>Datos de solicitud:</p>
                            <div className="row mt-4 mb-4 d-flex justify-content-center">
                                <img src={RC1} alt="Background of a City" className=" w-25 o-img-api" />
                            </div>
                        </div>
                    </Accordion>

                </div>
                <div className="col-12 col-sm-8">

                    <Accordion icon={faDatabase} color="bg-dark" title={"POST(ruta para agregar un nodo)"}>
                        <div className="card p-4 m-0">
                            <p>Ruta: /potnode</p>
                            <p>Content-Type: application/json</p>
                            <p>Datos de solicitud:</p>
                            <div className="row mt-4 mb-4 d-flex justify-content-center">
                                <img src={RC1} alt="Background of a City" className=" w-25 o-img-api" />
                            </div>
                        </div>
                    </Accordion>

                </div>
            </div>
           
        </div>
    )
}

export default apiPage;