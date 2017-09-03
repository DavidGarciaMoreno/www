'use strict';

var express = require('express');
var UserController = require('../controllers/user.js');

var api = express.Router();

api.get('/pruebas-del-controlador', UserController.pruebas);
api.post('/register', UserController.saveUser);

module.exports = api;

