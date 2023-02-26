import { db } from './database/db';
import express, { Express, Request, Response} from 'express';
import cors from 'cors';

// Llamada a la función db
db()
  .then(() => {
    console.log('Conexión a la base de datos establecida');
  })
  .catch((error) => {
    console.log(error);
  });

// Configuración de servidor
const port = 3900;
const app: Express = express();
app.use(cors());

//Convertir body a objeto js
app.use(express.json());

// Rutas
app.get("/probando", (req: Request, res: Response) => {
	console.log("Se ha ejecutado el endopoint");
	res.status(200).json({
		prueba: "esto es una prueba",
	});
})

// Escuchar peticiones http
app.listen(port, () => {
	console.log("Servidor corriendo en el puerto " + port);
});
