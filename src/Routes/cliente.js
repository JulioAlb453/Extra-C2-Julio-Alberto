const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente');

// Rutas para los endpoints CRUD
router.get('/obtenerCliente/', clienteController.getAllCliente);
router.get('/obtenerClienteConAutos/', clienteController.getAllClientesConAutos);
router.post('/', clienteController.addCliente);
router.put('/:id', clienteController.updateCliente);
router.delete('/:id', clienteController.deleteCliente);

module.exports = router;



