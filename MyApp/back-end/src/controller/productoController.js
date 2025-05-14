//capturar errores
import { getAllProductos, insertarProducto, deleteProduct } from "../model/productoModel.js";



const getAllp = async (req,res) => {
    
    try {
        const productos = await getAllProductos()
        res.json(productos)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
} 

const insertarP = async (req,res) => {
    
    try {
        await insertarProducto(req.body)
        res.status(201).json({message: 'Producto creado'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteP = async (req,res) => {
    
    try {
        await deleteProduct(req.params)
        res.status(201).json({message: 'Producto eliminado'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export {getAllp, insertarP, deleteP}
