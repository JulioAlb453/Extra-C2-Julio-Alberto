const express = require('express');
const router = express.Router();
const paqueteController = require('../controllers/paquete');

// Rutas para los endpoints CRUD
router.get('/obtenerPaquete/', paqueteController.getAllPaquetes);
router.post('/', paqueteController.addPaquete);
router.put('/:id', paqueteController.updatePaquete);
router.delete('/:id', paqueteController.deletePaquete);

module.exports = router;



