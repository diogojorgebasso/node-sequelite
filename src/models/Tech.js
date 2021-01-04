const {Model, DataTypes} = require("sequelize")

class User extends Model{
  static init(connection){
    super.init({
      name: DataTypes.STRING,

    }, {
      sequelize: connection,
      tableName: 'techs',

    })
  }
  static associate(models){
    this.belongsToMany(models.User, {foreignKey: 'techId', through:'user_techs', as: 'users'})
  }
}
module.exports = User