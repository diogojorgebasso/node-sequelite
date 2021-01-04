const User = require('../models/User')
const Address = require('../models/Address')
const { index } = require('./UserController')
module.exports={
  async index(req,res){
    const {user_id} = req.params
    const user = await User.findByPk(user_id, {
      include: {association: 'addresses'}
    })
    return res.json(user)
  },
  async store(req,res){
    const {user_id} = req.params
    const {zipcode, street, number, apt} = req.body
    const user = await User.findByPk(user_id)
    if(!user){
      return res.status(400).json({error: 'User not found'})
    }
    const address = await Address.create({
      zipcode,
      street,
      number,
      apt,
      user_id
    })
    return res.json(address)
  }
}