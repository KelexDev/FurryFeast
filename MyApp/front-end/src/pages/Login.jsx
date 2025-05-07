import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";
import '../assets/Login.css';

export default function Login() {
    return (
        <>
            <div id='log'>
                <div className="container"  >
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="row align-items-center">

                        <div className="col-6 text-white">
                            <h1 className="fw-bold">Iniciar sesión</h1>
                            <p>
                                ¿Olvidaste la contraseña?<br />
                                <Link to="/" className="text-custom fw-bold">
                                    RECUPERAR CONTRASEÑA
                                </Link>
                            </p>
                            <p>
                                El software de inventarios más óptimo y eficaz para que realices
                                las ventas de tu tienda de mascotas.
                            </p>
                        </div>

                        <div className="col-6 d-flex justify-content-center mb-3">
                            <div className="login-container p-4 text-white w-75">
                                <h2 className="text-center">Login</h2>
                                <form>
                                    <div>
                                        <label className="form-label">
                                            Username
                                        </label>
                                        <input type="text" className="form-control" id="username" placeholder="Usuario" />
                                    </div>
                                    <br />
                                    <div>
                                        <label className="form-label">
                                            Password
                                        </label>
                                        <input type="password" className="form-control" id="password" placeholder="Contraseña" />
                                    </div>
                                    <br />

                                    <div className="text-center">
                                        <button className="btn btn-custom">Iniciar Sesión</button>
                                    </div>

        

                                    <br />
                                    <div className="text-center">
                                        <p>O si no tienes cuenta</p>
                                        <button className="btn btn-custom">Registrate aquí</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}