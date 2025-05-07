// import React, { useState } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../assets/AddProducts.css';

const AddProducts = () => {

    return (
        <>
            <div id='cont'>
                <div className="container " >
                    <br />
                    <div className="row">
                        <div className="col-md-8">
                            <h2>Nuevo Producto</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">
                                        Nombre del Producto:
                                    </label >
                                    <div className="col-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nombre"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="descripcion" className="form-label">
                                        Descripción:
                                    </label>
                                    <div className="col-6">
                                        <textarea
                                            className="form-control"
                                            id="descripcion"
                                            rows="2"
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="precio" className="form-label">
                                        Precio:
                                    </label>
                                    <div className="col-6">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="precio"
                                            step="0.01"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="stock" className="form-label">
                                        Stock:
                                    </label>
                                    <div className="col-6">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="stock"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="categoria" className="form-label">
                                        Categoria:
                                    </label>
                                    <div className="col-6">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="categoria"
                                            required
                                        />
                                    </div>
                                </div>
                                <button id='btnp' type="submit" className="btn  mb-20">
                                    Agregar Producto
                                </button>
                            </form>
                            <br />
                        </div>

                        {/* <div className="col-md-4 d-flex" >
                            <img src="PosterAdd.png" id='imgp' alt="Poster" />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddProducts;