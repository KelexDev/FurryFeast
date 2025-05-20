import { getAllProductos } from "../model/productoModel.js";


const getAllp = async (req,res) => {
    
    try {
        const productos = await getAllProductos()
        res.json(productos)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
} 

export {getAllp}
