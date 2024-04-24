import 'dotenv/config';
import users from '../../public/data/users.js'
import jwt from 'jsonwebtoken';
import path from 'path';

const __dirname = path.resolve();

const secretKey = process.env.SECRET_KEY;

// Función para renderizar la página de inicio
export const home = (req, res) => {
    res.sendFile(__dirname + '/public/views/index.html');
};


