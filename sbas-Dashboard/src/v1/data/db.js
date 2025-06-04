const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Skole123',
    database: 'sbas',
    waitforconnection: true,
    connectionlimit: 10,
    queuelimit: 0
});

module.exports = {
    pool
}