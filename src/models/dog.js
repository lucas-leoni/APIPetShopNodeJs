const Customer = require('./customer.js');
const { DataTypes } = require('sequelize');
const Sequelize = require('../database.js');

const Dog = Sequelize.define(
  'cachorros',
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
    breed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerId: {
      field: 'customer_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Customer,
        key: 'id',
      },
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Dog;
