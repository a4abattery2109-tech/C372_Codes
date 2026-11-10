const mysql = require('mysql2');

// Shared pool used by query-based models and transactional operations.
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'RP738964$',
  database: 'petcare'
});

module.exports = connection;
