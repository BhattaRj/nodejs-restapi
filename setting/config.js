const Joi = require('joi');
require('dotenv').config();

const envVarsSchema = Joi.object({
	NODE_ENV: Joi.string()
		.valid('development', 'production', 'test', 'provision')
		.default('development'),
	PORT: Joi.number()
		.default(3000),
	JWT_SECRET: Joi.string()
		.required(),
	MYSQL_HOST: Joi.string()
		.required(),
	MYSQL_USER: Joi.string()
		.required(),
	MYSQL_PASSWORD: Joi.string()
		.required(),
	MYSQL_DB_NAME: Joi.string()
		.required(),
});

const { error, value: envVars } = envVarsSchema.validate({
	NODE_ENV: process.env.NODE_ENV,
	PORT: process.env.PORT,
	JWT_SECRET: process.env.JWT_SECRET,
	MYSQL_HOST: process.env.MYSQL_HOST,
	MYSQL_USER: process.env.MYSQL_USER,
	MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
	MYSQL_DB_NAME: process.env.MYSQL_DB_NAME,
});

if (error) {
	throw new Error(`Config validation error: ${error.message}`);
}

const config = {
	env: envVars.NODE_ENV,
	port: envVars.PORT,
	jwtSecret: envVars.JWT_SECRET,
	mysql: {
		host: envVars.MYSQL_HOST,
		username: envVars.MYSQL_USER,
		password: envVars.MYSQL_PASSWORD,
		database: envVars.MYSQL_DB_NAME,
	},
};

module.exports = config;

