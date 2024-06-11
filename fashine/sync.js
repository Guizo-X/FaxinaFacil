require('dotenv').config();
const sequelize = require('./models').sequelize;
const User = require('./models/user');

(async () => {
  try {
    await sequelize.sync({ force: true }); 
    console.log('Database synchronized successfully');
  } catch (error) {
    console.error('Unable to synchronize the database:', error);
  }
})();
