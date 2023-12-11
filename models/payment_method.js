'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment_method extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User,models.payment_type, {foreignKey: 'userId', foreignKey: 'payment_id'})
    }
  }
  payment_method.init({
    accountId: {
      type:DataTypes.INTEGER,
      primaryKey:true
    },
    payment_id: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'payment_method',
    underscored:true,
  });
  return payment_method;
};