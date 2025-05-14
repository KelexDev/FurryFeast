import { getAllp, insertarP, deleteP } from "../controller/productoController.js";
import express from 'express' //Contiene una funcion router que permite el enrutamiento  -Enrutamineto-Es gestionar los dso tipos de peticiones (Request y respond)

const router = express.Router()
//Consultas
router.get('/List', getAllp)
router.post('/insertarP', insertarP)
router.delete('/:product_id', deleteP)


export default router;
