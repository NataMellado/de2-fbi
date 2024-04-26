import 'dotenv/config';
import users from '../../public/data/users.js'
import jwt from 'jsonwebtoken';


// Función para autenticar al usuario
async function login (req, res) {
    try {
        const { email, password } = req.body;

        // Buscar al usuario en la lista basándose en el email y la contraseña
        const user = users.find(user => user.email === email && user.password === password);

        if (!user) {
            return res.status(401).json({ error: "Usuario o clave incorrecta" });
        }

        // Generar un token de autenticación
        const token = jwt.sign(
            { email }, 
            process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });
        const cookieOption = {
            expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRATION * 60 *1000), // las cookies se manejan en milisegundos ( en este caso el valor es de 2 minutos)
            path: '/',
            httpOnly: true // Opcional: para asegurar que la cookie solo sea accesible a través de HTTP(S) y no a través de JavaScript
        }

        // Enviar una respuesta exitosa con el token 
        res.cookie('token', token, cookieOption);
        res.send({status: 'success', message: "Usuario logueado"})
     
    } catch (error) {
        console.error('Error en signIn:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};


export const methods = {
    login
}