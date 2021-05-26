const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: false });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');
  process.exit(0);
};

seedAll();