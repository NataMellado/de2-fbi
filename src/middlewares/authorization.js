import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import users from '../../public/data/users.js';

function soloAgente(req, res, next) {
    const logueado = revisarCookie(req);
    if(logueado) return next();
    return res.redirect('/');
}

function soloPublico(req, res, next) {
    const logueado = revisarCookie(req);
    if(!logueado) return next();
    return res.redirect('/dashboard');
}

function revisarCookie(req) {
    try {
        const cookieToken = req.cookies.token;
        const decodificada = (jwt.verify(cookieToken, process.env.JWT_SECRET));
        const user = users.find(user => user.email === decodificada.email);
        if(!user) {
            return false
        }
        return true
    } catch (error) {
        return false;
    }
}

export const methods = {
    soloAgente,
    soloPublico
}