import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/Nosotros.css';
import { Link } from 'react-router-dom';

export default function Nosotros() {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src="nosotros.png" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">¿Quiénes somos?</h5>
                                <p className="card-text">
                                    En Ensigna nos especializamos en facilitar la gestión eficiente de asambleas empresariales, 
                                    asegurando claridad, control y cumplimiento.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <img src="Mision.png" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Nuestra misión</h5>
                                <p className="card-text">
                                    Optimizar los procesos de asambleas para empresas mediante tecnología moderna, 
                                    promoviendo la transparencia y eficiencia operativa.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <img src="Vision.png" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Nuestra visión</h5>
                                <p className="card-text">
                                    Ser la plataforma líder en Latinoamérica en gestión de asambleas empresariales para 
                                    organizaciones de todos los tamaños.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <img src="Diferencia.png" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">¿Qué nos diferencia?</h5>
                                <p className="card-text">
                                    Un enfoque personalizado, interfaz intuitiva y cumplimiento normativo garantizado, 
                                    nuestra tecnología está al servicio de tus decisiones.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}