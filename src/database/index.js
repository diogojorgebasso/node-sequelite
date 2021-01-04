const {Sequelize} = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../models/User')
const Address = require('../models/Address')
console.log(dbConfig)

const connection = new Sequelize(dbConfig)

User.init(connection)
Address.init(connection)

module.exports = connection