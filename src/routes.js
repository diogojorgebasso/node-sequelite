const express = require('express');
const routes = express.Router()
const UserController = require('./controllers/UserController')
const AdressController = require('./controllers/A')
routes.get('/users', UserController.index)

routes.post('/users', UserController.store)
routes.post('/adresses', Addres)
module.exports = routes;