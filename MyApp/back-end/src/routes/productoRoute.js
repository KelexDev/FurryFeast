import { getAllp } from "../controller/productoController.js";
import express from 'express'

const router = express.Router()

router.get('/', getAllp)

export default router;
