import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import '../../assets/List.css';
import { ObtenerProductos } from "../../services/ProductoService";
import Swal from "sweetalert2";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";


export default function List() {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [producto, setProducto] = useState({
        product_id: 0,
        name_product: '',
        description_product: '',
        price: 0,
        stock: 0,
        category: ''
    });

    useEffect(() => {
        fetchProductos();
    }, []);

    const fetchProductos = async () => {
        try {
            const product = await ObtenerProductos();
            setProductos(product);
        } catch (error) {
            setError(error.message || "Error al obtener productos");
        }
    };

    const handleChange = (e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/insertarP', producto);
            Swal.fire('Producto agregado', 'El producto se ha agregado correctamente', 'success');
            setShowModal(false);
            fetchProductos();
        } catch (error) {
            console.error("Error en la solicitud:", error.response);
            Swal.fire('Error', `No se pudo agregar el producto: ${error.response ? error.response.data.message : 'Error desconocido'}`, 'error');
        }
    };

    const handleDelete = (product_id) => {
        Swal.fire({
            title: "Estas seguro que lo deseas eliminar?",
            text: "No hay vuelta atras",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar!",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/${product_id}`)
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
            fetchProductos();
        });
    }

    return (
        <>
            <div className="container">
                <br />
                <button onClick={() => setShowModal(true)} className="btn btn-prime">
                    Registrar productos
                </button>
                <br />

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
                                    <th className="text-center">Acción</th>


                                </tr>
                            </thead>
                            <tbody>
                                {productos.map((p) => (
                                    <tr key={p.product_id}>
                                        <td>{p.product_id}</td>
                                        <td>{p.name_product}</td>
                                        <td>{p.description_product}</td>
                                        <td>{p.price}</td>
                                        <td>{p.stock}</td>
                                        <td>{p.category}</td>
                                        <td>
                                            <button className="btn btn-success me-2">Editar</button>

                                            <button onClick={() => handleDelete(p.product_id)} className="btn btn-danger">
                                                Eliminar</button>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Modal */}
                        <Modal show={showModal} onHide={() => setShowModal(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title>Registrar Producto</Modal.Title>
                            </Modal.Header>
                            <form onSubmit={handleSubmit}>
                                <Modal.Body>
                                    <input onChange={handleChange} name="product_id" className="form-control" placeholder="Id" />
                                    <br />
                                    <input onChange={handleChange} name="name_product" className="form-control" placeholder="Nombre" />
                                    <br />
                                    <input onChange={handleChange} name="description_product" className="form-control" placeholder="Descripción" />
                                    <br />
                                    <input onChange={handleChange} name="price" className="form-control" placeholder="Precio" />
                                    <br />
                                    <input onChange={handleChange} name="stock" className="form-control" placeholder="Stock" />
                                    <br />
                                    <input onChange={handleChange} name="category" className="form-control" placeholder="Categoría" />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                                        Cancelar
                                    </Button>
                                    <Button type="submit" variant="primary">
                                        Registrar
                                    </Button>
                                </Modal.Footer>
                            </form>
                        </Modal>

                        <br />
                        <div className="text-center mt-3">
                            <Link to="/">
                                <button className="btn btn-morado">Volver al inicio</button>
                            </Link>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        </>
    );
}

