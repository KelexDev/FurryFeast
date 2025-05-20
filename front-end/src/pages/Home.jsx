import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (

    <>

      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="ban1.jpg" className="d-block w-100" alt="c1" />
          </div>
          <div className="carousel-item">
            <img src="ban2.jpg" className="d-block w-100" alt="c2" />
          </div>
        </div>


        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>


        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <br />
      <br />

      <h2 className='container' id='txtcategoria'>¿Por qué elegir Ensigna?</h2>
      <div className='container py-5 d-flex align-items-center justify-content-between'>
        <div className="row row-cols-1 row-cols-md-3 g-4">

          <div className="col">
            <div className="card h-100">
              <img src="gestion.png" className="card-img-top" alt="Gestión de asambleas" />
              <div className="card-body">
                <h5 className="card-title" id='txtalimento'><b>Gestión eficiente</b></h5>
                <p className="card-text">
                  Ensigna te permite organizar y gestionar tus asambleas de forma clara, estructurada y conforme a la normativa vigente, ahorrando tiempo y reduciendo errores.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="participacion.jpg" className="card-img-top" alt="Participación activa" />
              <div className="card-body">
                <h5 className="card-title" id='txtparticipacion'><b>Participación activa</b></h5>
                <p className="card-text">
                  Fomenta la participación de todos los accionistas o miembros desde cualquier lugar, con herramientas interactivas, votaciones en tiempo real y acceso a información clave.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="documentacion.jpg" className="card-img-top" alt="Gestión documental" />
              <div className="card-body">
                <h5 className="card-title" id ='documetacionp'><b>Documentación centralizada</b></h5>
                <p className="card-text">
                  Mantén en orden toda la documentación de tus asambleas: actas, listas de asistencia, decisiones y archivos. Todo almacenado de forma segura y accesible.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>


      Link para ir a Lista<br />
      <Link to="/List" className="text-custom fw-bold">
        Lista
      </Link>
      <br />
      <br />

      Link para ir a agregar<br />
      <Link to="/AddProducts" className="text-custom fw-bold">
        Agregar 
      </Link>
    </>
  );
}