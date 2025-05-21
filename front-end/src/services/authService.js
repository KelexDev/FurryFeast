import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth';

export async function login(correo, password) {
    const res = await axios.post(`${API_URL}/login`, { correo, password });
    return res.data;
}