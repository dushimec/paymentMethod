'use strict';
import { Model, DataTypes } from 'sequelize';
export default (sequelize, DataTypes) => {
  class payment_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.payment_method, {foreignKey: 'payment_id'})
    }
  }
  payment_type.init({
    
    name: DataTypes.STRING,
    logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'payment_type',
    underscored:true,
  });
  return payment_type;
};