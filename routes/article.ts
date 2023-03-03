import express, { Router } from 'express';
import { getPrueba, getPrueba2, createArticle } from '../handlers/Article'

const router: Router = express.Router();
router.get('/prueba1', getPrueba);
router.get('/prueba2', getPrueba2);
router.post('/create', createArticle );
export default router
