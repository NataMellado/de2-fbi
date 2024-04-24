import express from 'express';
import routes from './src/routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(routes);
app.use(express.static('public')); 

app.listen(PORT, () => { console.log(`Server is running on port http://localhost:${PORT}`); });