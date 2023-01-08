const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');


// Route the home
//middle são os parramentros apois a rota.
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

//Route the contact
route.get('/contato', contatoController.paginaInicial);

module.exports = route;