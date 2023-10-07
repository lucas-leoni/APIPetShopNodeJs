const Customer = require('./customer.js');
const Service = require('./service.js');
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

Service.belongsTo(Dog, {
  as: 'dog',
  foreignKey: {
    name: 'dogId',
    allowNull: false,
  },
});

Dog.hasMany(Service, {
  as: 'services',
  foreignKey: {
    name: 'dogId',
    allowNull: false,
  },
});

module.exports = Dog;
