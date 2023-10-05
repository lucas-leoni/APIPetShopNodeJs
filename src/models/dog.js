const DataTypes = require('sequelize');
const Sequelize = require('../database.js');

const Customer = Sequelize.define(
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
    /* customer: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'customers',
        key: 'id',
      },
    }, */
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Customer;
