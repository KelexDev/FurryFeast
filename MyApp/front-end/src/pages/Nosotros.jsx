import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/Nosotros.css';
import { Link } from 'react-router-dom';

export default function Nosotros() {
    return (
        <>
            <div className="container mt-5 mb-5 ">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2 className=" mb-4">Acerca de Nosotros</h2>
                        <p>
                            En <strong>Furry Feast</strong>, nuestro amor por las mascotas va más allá de las palabras: es el corazón de todo lo que hacemos.
                            Nacimos con la misión de brindar soluciones integrales para tiendas de mascotas, combinando tecnología, cuidado y pasión en un solo lugar.
                        </p>
                        <p>
                            Ofrecemos un sistema innovador y fácil de usar que optimiza la gestión de inventarios, ventas y servicios, pensado especialmente para quienes aman y cuidan de los animales.
                            Nuestra visión es apoyar a los emprendedores del mundo pet-friendly, facilitando su trabajo diario y mejorando la experiencia tanto para los dueños de mascotas como para sus peludos compañeros.
                        </p>
                        <p><em>Furry Feast: donde el bienestar animal y la eficiencia se encuentran.</em></p>
                    </div>

                    <div className="col-md-6 text-center">
                        <img src="/PosterAdd.png" className="img-fluid rounded" style={{ maxHeight: "300px" }} />
                    </div>
                </div>
            </div>
        </>
    )
}