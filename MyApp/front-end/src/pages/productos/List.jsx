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
                    <h2 className="text-center mb-4">Productos para Mascotas</h2>

                    <div>
                        <table className="table custom-table">

                            <thead>
                                <tr>
                                    <th>ID Producto</th>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                    <th>Precio</th>
                                    <th>Stock</th>
                                    <th>Categoría</th>
                                </tr>
                            </thead>


                            <tbody>
                                {productos.map((p) =>
                                    <tr key={p.product_id}>

                                        <td >{p.product_id}</td>
                                        <td >{p.name_product}</td>
                                        <td >{p.description_product}</td>
                                        <td >{p.price}</td>
                                        <td >{p.stock}</td>
                                        <td >{p.category}</td>

                                        
                
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
