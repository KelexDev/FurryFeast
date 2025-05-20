import{getConnection} from "../config/Connection.js"

const getAllProductos = async ()=> {
    const con = await getConnection
    const result = await con.request().query('SELECT * FROM accionista')
    return result.recordset 
}

export const getTituloAsamblea = async () => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .query("SELECT nombre FROM Asambleas WHERE activa = 1"); // Ajusta esta consulta
        return result.recordset[0].nombre;
    } catch (error) {
        console.error("Error al obtener título:", error);
        return "Asamblea"; // Valor por defecto si hay error
    }}




export {getAllProductos, getTituloAsamblea} 
