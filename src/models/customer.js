const Dog = require('./dog.js');
const { DataTypes } = require('sequelize');
const Sequelize = require('../database.js');

const Customer = Sequelize.define(
  'clientes',
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

Dog.belongsTo(Customer, {
  as: 'customer',
  foreignKey: {
    name: 'customerId',
    allowNull: false,
  },
});

Customer.hasMany(Dog, {
  as: 'dogs',
  foreignKey: {
    name: 'customerId',
    allowNull: false,
  },
});

module.exports = Customer;
