import { Router } from 'express';
import { home } from '../controller/userController.js'

const router = Router();

router.get('/', home);

export default router;