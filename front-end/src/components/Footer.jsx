import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Footer.css';

export default function Footer() {
  return (


    <div className="footer text-center">
      <Link to="/"> <img src="/LogoAsamblea.png" width={100} /> </Link>

      <ul className="list-unstyled d-flex justify-content-center gap-4">
        <li><Link to="/about" className="text-white text-decoration-none">Nosotros</Link></li>
        <li><Link to="/services" className="text-white text-decoration-none">Servicios</Link></li>
        <li><Link to="/contact" className="text-white text-decoration-none">Contacto</Link></li>
      </ul>
      <p>&copy; 2025 Asamblea 2025 BD2. Todos los derechos reservados.</p>
    </div>
  );
}