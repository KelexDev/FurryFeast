import{getConnection} from "../config/Connection.js"

const getAllProductos = async ()=> {
    const con = await getConnection
    const result = await con.request().query('SELECT * FROM accionista')
    return result.recordset 
}




export {getAllProductos} 
