const express = require('express');
const router = express.Router();
const rentaController = require('../controllers/renta');

// Rutas para los endpoints CRUD
router.get('/obtenerRenta/', rentaController.getAllRenta);
router.post('/', rentaController.addRenta);
router.put('/:id', rentaController.updateRenta);
router.delete('/:id', rentaController.deleteRenta);

module.exports = router;



