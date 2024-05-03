'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airplane.init({
    airlineCode: {
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        len:[2,2],
        isUppercase:true,
      }
    },
    flightNumber: {
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        len:[1,4],
        isNumeric:true
      }
    },
    inService: {
      type:DataTypes.BOOLEAN,
      defaultValue:true,
      allowNull:false

    },
    maxNumPassengers:{
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        max:853,
        min:2
      }
    },
    currentNumPassengers:{
      type:DataTypes.INTEGER,
      allowNull:true,
      validate: {
        max: 853,
        min:0,
        isNotGreater(value){
          if(value > this.maxNumPassengers){
            throw new Error("Impossible")
          }
        },
        isInService(value){
          if(value !== null && value !== undefined && this.inService === false){
            throw new Error("Impossible")
          }
        }
      }
    },
    firstFlightDate: {
      type:DataTypes.DATE,
      allowNull:true,
      validate:{
        isBefore:'2022-01-01',
        isAfter:'2019-12-31'
      }
    }
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};
