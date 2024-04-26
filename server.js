import express from 'express';
import routes from './src/routes/routes.js';
import cookieParser from 'cookie-parser';

// Server
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Server is running on port http://localhost:${PORT}`); });

// Configuración 
app.use(express.static('public')); 
app.use(express.json()); // Middleware para parsear el body de las peticiones
app.use(cookieParser()); // Middleware para parsear las cookies de las peticiones

// Rutas
app.use('/', routes);
