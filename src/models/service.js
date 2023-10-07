const Dog = require('./dog.js');
const { DataTypes } = require('sequelize');
const Sequelize = require('../database.js');

const Service = Sequelize.define(
  'atendimentos',
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    dogId: {
      field: 'dog_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Dog,
        key: 'id',
      },
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Service;
