const mysql = require('mysql2');
//Cargar las variables de entorno
require('dotenv').config();
// Configuración de la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

// Conexión a la base de datos
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conexión a la base de datos MySQL establecida');
});

// Obtener todos los elementos
exports.getAllPaquetes = (req, res) => {
  db.query('SELECT * FROM paquetes', (err, result) => {
    if (err) {
      console.error('Error al obtener los elementos:', err);
      res.status(500).send('Error al obtener los elementos');
      return;
    }
    res.json(result);
  });
};

// Agregar un nuevo elemento
exports.addPaquete = (req, res) => {
  const newPaquete = req.body;
  db.query('INSERT INTO paquetes SET ?', newPaquete, (err, result) => {
    if (err) {
      console.error('Error al guarddar los elementos:', err);
      res.status(500).send('Error al agregar un nuevo elemento');
      return;
    }
    res.status(201).send('Nuevo elemento agregado correctamente');
  });
};

// Actualizar un elemento existente
exports.updatePaquete = (req, res) => {
  const paqueteId = req.params.id;//1
  const updatedPaquete = req.body;//
  db.query('UPDATE paquetes   SET ? WHERE id = ?', [updatedPaquete, paqueteId], (err, result) => {
    if (err) {
      console.error('Error al modificar los elementos:', err);
      res.status(500).send('Error al actualizar el elemento');
      return;
    }
    res.send('Elemento actualizado correctamente');
  });
};

// Eliminar un elemento
exports.deletePaquete = (req, res) => {
  const paqueteId = req.params.id;
  db.query('DELETE FROM paquetes  WHERE id = ?', paqueteId, (err, result) => {
    if (err) {
      console.error('Error al eliminar los elementos:', err);
      res.status(500).send('Error al eliminar el elemento');
      return;
    }
    res.send('Elemento eliminado correctamente');
  });
};
