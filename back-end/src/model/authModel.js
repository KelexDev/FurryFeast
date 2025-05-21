import { getConnection, sql } from '../config/Connection.js';

// Busca usuario por correo en accionista y verifica si es admin
export async function findUserByEmail(email) {
    const pool = await getConnection;
    // Buscar en accionista
    const accionista = await pool.request()
        .input('correo', sql.VarChar, email)
        .query('SELECT * FROM accionista WHERE correo = @correo');
    if (accionista.recordset.length === 0) return null;

    const user = accionista.recordset[0];
    // Verificar si es administrador
    const admin = await pool.request()
        .input('doc', sql.BigInt, user.numero_documento)
        .query('SELECT * FROM administrador WHERE doc_empleado_fk = @doc');
    user.rol = admin.recordset.length > 0 ? 'admin' : 'participante';
    return user;
}