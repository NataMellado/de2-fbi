import { Router } from 'express';
import { methods as authentication } from '../controller/authentication.controller.js';
import { methods as authorization } from '../middlewares/authorization.js';
import { logout } from '../controller/logout.controller.js';

import path from 'path';
const __dirname = path.resolve();

const router = Router();

router.get('/', authorization.soloPublico, (req, res) => res.sendFile(__dirname + '/public/views/index.html'));
router.get('/dashboard', authorization.soloAgente, (req, res) => res.sendFile(__dirname + '/public/views/dashboard.html'));
router.post('/api/login', authentication.login);
router.post('/api/logout', logout);

export default router;