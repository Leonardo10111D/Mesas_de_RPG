const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();


routes.get('/ongs', OngController.index);  //para listar -> GET
routes.post('/ongs', OngController.create);  //para criar -> POST

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/sessions', SessionController.create);

module.exports = routes;
/*
# Entidades
ONG
Caso (incident)

# Funcionalidades
Login de ONG
Logout de ONG
Cadastro de ONG
Cadastrar novos casos
Deletar casos
Listar casos específicos de uma ONG
Listar todos os casos
Entrar em contato com uma ONG
*/