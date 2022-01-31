const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Rager666!',
    database: 'employeetracker'
});

module.exports = connection;