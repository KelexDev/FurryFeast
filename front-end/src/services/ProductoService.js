import axios from 'axios'

const api = 'http://localhost:3000/List'

export const ObtenerProductos = async () => {
    const listado = await axios.get(api)
    return listado.data
}
