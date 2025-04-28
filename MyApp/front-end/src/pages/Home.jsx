import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/Home.css';

export default function Home() {
  return (

    <>

      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="Banner1.png" className="d-block w-100" alt="Banner 1" />
          </div>
          <div className="carousel-item">
            <img src="Banner2.png" className="d-block w-100" alt="Banner 2" />
          </div>
          <div className="carousel-item">
            <img src="Banner3.png" className="d-block w-100" alt="Banner 3" />
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

      <h2 className='container' id='txtcategoria'>Categorias para tu mascota.</h2>
      <div className='container py-5 d-flex align-items-center justify-content-between'>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <img src="alimentoc.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" id='txtalimento'><b>Alimento</b></h5>
                <p className="card-text">En Furry Feast, sabemos que la comida es más que solo alimento: es amor,
                  energía y bienestar para tu mascota. Te ofrecemos una selección de alimentos premium y balanceados
                  que se adaptan a las necesidades de cada peludo.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="juguetes.jpg" className="card-img-top" wheit alt="..." />
              <div className="card-body">
                <h5 className="card-title"> <b> Juguetes </b> </h5>
                <p className="card-text">En Furry Feast, tenemos los juguetes perfectos para que tu mascota se divierta,
                  ejercite y explore. Desde pelotas resistentes hasta rascadores para gatos,
                  aquí encuentras todo lo que necesita para horas de entretenimiento.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="accesorios.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title"> <b> Accesorios </b> </h5>
                <p className="card-text">En Furry Feast, tenemos todo lo que tu mascota necesita para estar cómoda y con estilo.
                  Desde camas acogedoras hasta collares de todo tipo,
                  aquí encuentras los mejores accesorios para su día a día y para estar comodo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <div className='container py-5 d-flex align-items-center justify-content-between compromiso-section row-6'>
        <div className='container align-items-center'>
          <p>
            En <b> Furry Feast </b>, sabemos que tu mascota es más que un simple compañero… ¡es parte de tu familia!  Por eso,
            creamos un espacio donde puedes encontrar todo lo que necesita: desde alimentos premium hasta los mejores accesorios
            para consentirlo como se merece.

            Pero eso no es todo... ¡esto apenas comienza! Muy pronto traeremos servicios exclusivos para que el cuidado
            de tu peludo sea más fácil y completo.

            Calidad, comodidad y amor en cada compra. Porque en Furry Feast, ellos son los verdaderos reyes de la casa.
          </p>
        </div>

        <div className='container row-6'>
          <img src="dogpurple.webp" alt="" className="img-fluid rounded" width={500} />
        </div>
      </div> */}

    </>
  );
}