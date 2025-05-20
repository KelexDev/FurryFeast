import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";
import '../../assets/List.css';
import { useState, useEffect } from "react"
import { ObtenerProductos } from "../../services/ProductoService"

export default function List() {

    const [productos, setProductos] = useState([])
    const [error, setError] = useState('')

    useEffect((p) => {
        fetchProductos()
    }, [])

    const fetchProductos = async () => {
        try {
            const product = await ObtenerProductos()
            setProductos(product)

        } catch (error) {
            setError(error)

        }

    }

    return (
        <>
            <div className="container">
                <div className="container mt-4">
                    <h2 className="text-center mb-4">Lista de accionistas</h2>

                    <div>
                        <table className="table custom-table">

                            <thead>
                                <tr>
                                    <th>ID Accionista</th>
                                    <th>Tipo Documento</th>
                                    <th>Numero documento</th>
                                    <th>Nombre Completo</th>
                                    <th>Numero de acciones</th>
                                    <th>Celular</th>
                                    <th>Correo</th>
                                </tr>
                            </thead>


                            <tbody>
                                {productos.map((p) =>
                                    <tr key={p.accionista_id}>

                                        <td >{p.accionista_id}</td>
                                        <td >{p.tipo_documento}</td>
                                        <td >{p.numero_documento}</td>
                                        <td >{p.nombre_completo}</td>
                                        <td >{p.num_acciones}</td>
                                        <td >{p.celular}</td>
                                        <td >{p.correo}</td>

                                        
                
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <br />
                        <div className="text-center mt-3">
                            <Link to="/"> <button className="btn btn-morado">Agregar Producto</button> </Link>

                        </div>
                        <br />
                    </div>
                </div>
            </div>
        </>
    );
}
