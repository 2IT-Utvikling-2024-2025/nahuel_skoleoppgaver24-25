const mysql = require("mysql2/promise");
const { host, user, password } = require("pg/lib/defaults");

const pool = mysql.createpool({
  host: "localhost",
  user: "root",
  password: "ThecheesecakeSQLison20thstreet!",
  database: "test_program_db",
  waitForConnection: true,
  connectionlimit: 10,
  queuelimit: 0,
});

module.exports = pool;
