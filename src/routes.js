const { Router } = require('express');

const UserController = require('./controllers/UserController');

const routes = new Router();

routes.get('/users', UserController.index);

module.exports = routes;