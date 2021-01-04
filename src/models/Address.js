const {Model, DataTypes} = require("sequelize")

class User extends Model{
  static init(connection){
    super.init({
      zipcode: DataTypes.STRING,
      street: DataTypes.STRING,
      number: DataTypes.INTEGER,
      apt: DataTypes.INTEGER
    }, {
      sequelize: connection
    })
  }
}
module.exports = User