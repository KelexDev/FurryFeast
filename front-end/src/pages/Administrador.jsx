import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Administrador() {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState("");

    return (
        <>
            <div className="container d-flex flex-column align-items-center py-4">
                
                <h1 className="text-center mb-4">Título Asamblea</h1>

                
                <div className="row w-100 mb-4 justify-content-center">
                    <div className="col-md-6 mb-3">
                        <select
                            className="form-select"
                            aria-label="Seleccione una opción"
                            value={opcionSeleccionada}
                            onChange={(e) => setOpcionSeleccionada(e.target.value)}
                        >
                            <option value="">Seleccione una opción</option>
                            <option value="1">Opción 1</option>
                            <option value="2">Opción 2</option>
                            <option value="3">Opción 3</option>
                        </select>
                    </div>

                    <div className="col-md-6 d-flex justify-content-center gap-3">
                        <button className="btn btn-primary px-4">Lanzar Moción</button>
                        <button className="btn btn-danger px-4">Finalizar Votación</button>
                    </div>
                </div>

                <div className="w-100">
                    <h2 className="text-center mb-3">Lista de Votantes</h2>

                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col" className="text-center">Nombre</th>
                                    <th scope="col" className="text-center">N° Documento</th>
                                    <th scope="col" className="text-center">Respuesta</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center">Ejemplo</td>
                                    <td className="text-center">Usuario</td>
                                    <td className="text-center">12345678</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
