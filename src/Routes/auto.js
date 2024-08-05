const express = require('express');
const router = express.Router();
const autoController = require('../controllers/auto');

// Rutas para los endpoints CRUD
router.get('/obtenerAuto/', autoController.getAllAutos);
router.post('/', autoController.addAutos);
router.put('/:id', autoController.updateAuto);
router.delete('/:id', autoController.deleteAuto);

module.exports = router;



