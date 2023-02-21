import { db } from './database/db';

// Llamada a la función db
db()
  .then(() => {
    console.log('Conexión a la base de datos establecida');
  })
  .catch((error) => {
    console.log(error);
  });
