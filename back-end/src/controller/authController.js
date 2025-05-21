import { findUserByEmail } from '../model/authModel.js';

export async function login(req, res) {
    const { correo, password } = req.body;
    if (!correo || !password) return res.status(400).json({ msg: 'Datos incompletos' });

    const user = await findUserByEmail(correo);
    if (!user) return res.status(401).json({ msg: 'Usuario no encontrado' });

    // Contraseña: últimos 3 dígitos del número de documento
    const docStr = user.numero_documento.toString();
    const last3 = docStr.slice(-3);
    if (password !== last3) return res.status(401).json({ msg: 'Contraseña incorrecta' });

    // Retornar datos básicos y rol
    res.json({
        id: user.accionista_id,
        nombre: user.nombre_completo,
        correo: user.correo,
        rol: user.rol
    });
}