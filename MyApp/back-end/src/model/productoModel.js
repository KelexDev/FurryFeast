//acciones de la consulta (campos de la tabla)

import { getConnection } from "../config/Connection.js";
import sql from 'mssql';

const getAllProductos = async () => {
    const con = await getConnection
    const result = await con.request().query('sp_listar_productos');
    return result.recordset;
};

const insertarProducto = async (producto) => {
    const { product_id, name_product, description_product, price, stock, category } = producto;
    const con = await getConnection;

    await con.request()
        .input('product_id', sql.Int, product_id)
        .input('name_product', sql.VarChar, name_product)
        .input('description_product', sql.Text, description_product)
        .input('price', sql.Decimal(10, 2), price)
        .input('stock', sql.Int, stock)
        .input('category', sql.VarChar, category)
        .execute('sp_insertar_productos');
};

//metodo para eliminar un producto
const deleteProduct = async (producto) => {
    const {product_id} = producto;
    const con = await getConnection;
    await con.request()
        .input('product_id', sql.Int, product_id)
        .execute('sp_eliminar_producto');
};



export { getAllProductos, insertarProducto, deleteProduct };
