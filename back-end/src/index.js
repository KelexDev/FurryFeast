import express from 'express' //crea servidor 
import cors from 'cors'
import dotenv from 'dotenv' //utilizar las env
import {getConnection} from './config/Connection.js'
import router from './routes/productoRoute.js'




const app = express()

dotenv.config()

app.use(cors())
app.use(express.json())
app.use(router) //metodo de listar

app.listen(process.env.PORT, ()=>{
    console.log(`Conectados al puerto: ${process.env.PORT}`)
    getConnection
})
