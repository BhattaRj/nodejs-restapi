const mysql = require("mysql2/promise");
const config = require("./../config");

const pool = mysql.createPool({
	host: config.host,
	user: config.mysql.username,
	password: config.mysql.password,
	database: config.mysql.database,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0
});

async function query(sql, params) {
	const [results] = await pool.query(sql, params);
	return results;
}

module.exports = {
	query,
	pool,
};




