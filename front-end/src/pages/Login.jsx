import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link, useNavigate } from "react-router-dom";
import '../assets/Login.css';
import axios from 'axios';

export default function Login() {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMsg('');
        try {
            const res = await axios.post('http://localhost:3000/api/auth/login', {
                correo,
                password
            });
            localStorage.setItem('user', JSON.stringify(res.data));
            // Redirigir según el nombre
            if (res.data.nombre && res.data.nombre.trim().toLowerCase() === 'admin') {
                navigate('/Administrador');
            } else {
                navigate('/Participante');
            }
        } catch (err) {
            setMsg(err.response?.data?.msg || 'Error de conexión');
        }
    };

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
                                <Link to="/Administrador" className="text-custom fw-bold">
                                    RECUPERAR CONTRASEÑA
                                </Link>
                            </p>
                            <p>
                                PARTICIPANTE<br />
                                <Link to="/Participante" className="text-custom fw-bold">
                                    RECUPERAR CONTRASEÑA
                                </Link>
                            </p>
                            <p>
                                El software de inventarios más óptimo y eficaz para que realices
                                las votaciones para tu empresa.
                            </p>
                        </div>

                        <div className="col-6 d-flex justify-content-center mb-3">
                            <div className="login-container p-4 text-white w-75">
                                <h2 className="text-center">Login</h2>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label className="form-label">
                                            Correo
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Correo"
                                            value={correo}
                                            onChange={e => setCorreo(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <br />
                                    <div>
                                        <label className="form-label">
                                            Contraseña
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Contraseña"
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <br />

                                    <div className="text-center">
                                        <button className="btn btn-custom" type="submit">Iniciar Sesión</button>
                                    </div>
                                    {msg && <div className="alert alert-danger mt-3">{msg}</div>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br /><br /> <br />
            </div>
        </>
    );
}