require('dotenv').config();

module.exports = {
    development: {
      username: process.env.SEQUELIZE_ID,
      password: process.env.SEQUELIZE_PASSWORD,
      database: 'movie',
      host: process.env.IP_ADDRESS,
      dialect: 'mariadb'
    },
    test: {
      username: process.env.SEQUELIZE_ID,
      password: process.env.SEQUELIZE_PASSWORD,
      database: 'database_test',
      host: process.env.IP_ADDRESS,
      dialect: 'mariadb'
    },
    production: {
      username: process.env.SEQUELIZE_ID,
      password: process.env.SEQUELIZE_PASSWORD,
      database: 'movie',
      host: process.env.IP_ADDRESS,
      dialect: 'mariadb',
      logging: false,
    }
  }
  