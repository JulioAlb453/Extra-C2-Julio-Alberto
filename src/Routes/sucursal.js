const express = require('express');
const router = express.Router();
const sucursalController = require('../controllers/sucursal');

// Rutas para los endpoints CRUD
router.get('/obtenerSucursal/', sucursalController.getAllSucursales);
router.post('/', sucursalController.addSucursal);
router.put('/:id', sucursalController.updateSucursal);
router.delete('/:id', sucursalController.deleteSucursal);

module.exports = router;



