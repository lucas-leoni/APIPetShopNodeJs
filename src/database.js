const { Sequelize } = require('sequelize');
const { development } = require('./config');

const conection = new Sequelize(development);

conection
  .sync()
  .then(() => console.log('\nConnected to database successfully!'))
  .catch((error) => console.log('Could not connect to database!\n\n', error));

module.exports = conection;
