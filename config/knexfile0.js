
const path = require('path');

module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL || {
    connectionString: 'postgres://mgaciqwnkxnpni:eb88ea4662a1051bd0720eee6af11d58138ddb8f291a72010a3ac4c928b337cb@ec2-52-73-67-148.compute-1.amazonaws.com:5432/dfhqldkos3bb36',
    ssl: {
      rejectUnauthorized: false
    }
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: path.join(__dirname, '../migrations'), // Adjust the path accordingly
  },
  seeds: {
    directory: path.join(__dirname, '../seeds'), // Adjust the path accordingly
  },
};
