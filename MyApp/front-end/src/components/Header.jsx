import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css.css';

export default function Header() {
  return (

    <header>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#653E8C" }}>
        <div id='nav' className="container d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to=""><img src="LogoBlanco.png" alt="" width={80} /></Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              <li className="nav-item"  >
                <Link className="nav-link text-white  " to="/Nosotros">Nosotros</Link> {/* Poner el link de la pagina de noosotros */}
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Productos
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/about">Perro</Link></li>
                  <li><Link className="dropdown-item" to="/services">Gato</Link></li>

                </ul>
              </li>
            </ul>

            <div className="d-flex align-items-center flex-grow-1 mx-5">
              <input
                type="text"
                className="form-control"
                placeholder="¿Qué necesita tu mascota?"
                style={{ maxWidth: "500px", borderRadius: "20px" }}
              />
            </div>

            <Link to='/Login'> <button className="btn btn-primary text-white"
              style={{ backgroundColor: "#2f1747", borderColor: "#2f1747" }}
              type="submit">Iniciar Sesión</button></Link>
          </div>
        </div>
      </nav>



      {/* <nav>
        <Link to='/' className='me-5'>Perro</Link>
        <Link to='/' className='me-5'>Gato</Link>
      </nav> */}
    </header>
  );
}
