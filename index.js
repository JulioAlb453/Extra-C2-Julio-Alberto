const express = require('express');
const bodyParser = require('body-parser');
const autoRoute = require('./src/Routes/auto')
const clienteRoute = require('./src/Routes/cliente')
const paqueteRoute = require('./src/Routes/paquete')
const rentaRoute = require('./src/Routes/renta')
const sucursalRoute = require('./src/Routes/sucursal')


const app = express();
const port = 3000;

// Middleware para analizar los cuerpos de las solicitudes
app.use(bodyParser.json());

// Usar las rutas de los items
app.use('/auto',  autoRoute);
app.use('/cliente', clienteRoute);
app.use('/paquete', paqueteRoute);
app.use('/renta', rentaRoute);
app.use ('/sucursal', sucursalRoute)
// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express en ejecución en http://localhost:${port}`);
});
