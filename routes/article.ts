import express, { Router } from 'express';
import { getPrueba, getPrueba2 } from '../handlers/Article'

const router: Router = express.Router();
router.get('/', getPrueba);
router.get('/test', getPrueba2);
export default router
