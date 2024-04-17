// config/knexfile.js
const path = require('path');
const config = require('./default.json');

module.exports = {
  client: 'pg',
  connection: {
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: path.join(__dirname, '../migrations'), // Adjust the path accordingly
  },
  seeds: {
    directory: path.join(__dirname, '../seeds'), // Adjust the path accordingly
  },
};
