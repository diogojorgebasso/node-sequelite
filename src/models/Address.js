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
  static associate(models){
    this.belongsTo(models.User, {foreignKey: 'userId', as: 'user'})
  }
}
module.exports = User