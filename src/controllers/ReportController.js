const {operators} = require('sequelize')
const User = require('../models/User')
module.exports={
  async show(req,res){
    //query COMPLEXA
    const users = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email:{
          [operators.ilike]: '%@ensinu.com.br'
        }
      },
      include: [
        {association: 'addresses', where: {city: 'São José dos Campos'}},
        { association: 'techs', required:false, where:{
          name: {
            [operators.ilike]:'React%'
          }
        } }
      ]
    })
    return res.json(user)
  }
}