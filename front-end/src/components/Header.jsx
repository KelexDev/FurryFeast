import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css.css';

export default function Header() {
  return (

    <header>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#211E7B" }}>
        <div id='nav' className="container d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to=""><img src="LogoAsamblea.png" alt="" width={150} /></Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              <li className="nav-item"  >
                <Link className="nav-link text-white  " to="/Nosotros">Nosotros</Link>
              </li>
            </ul>


            <Link to='/Login'> <button className="btn btn-primary"
              style={{ backgroundColor: "#fff", color: "#211E7B", borderRadius: "20px", padding: "10px 20px" }}
              type="submit">Iniciar Sesión</button></Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
