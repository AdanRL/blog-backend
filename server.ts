// import { db } from './database/db';
import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import routerArticle from './routes/article'
import routerArticle2 from './routes/article'
dotenv.config();
// Llamada a la función db
// db()
//   .then(() => {
//     console.log('Conexión a la base de datos establecida');
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Configuración de servidor
const port: number = parseInt(process.env.PORT);
const app: Express = express();
app.use(cors());

//Convertir body a objeto js
app.use(express.json());

// Rutas
app.use('/', routerArticle)
app.use('/test', routerArticle2)
// Escuchar peticiones http
try {
	app.listen(port, () => {
		console.log("Servidor corriendo en el puerto " + port);
	});
} catch(error) {
	console.error('Algo ha fallado', error);
}
