const { DataTypes } = require('sequelize');
const Conection = require('../database.js');

const Employee = Conection.define(
  'funcionarios',
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Employee;
