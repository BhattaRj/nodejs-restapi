const express = require("express");
const cors = require('cors');
const compression = require('compression')
const helmet = require("helmet");

const app = express();
const config = require('./setting/config');

const morganMiddleware = require('./setting/logger/morgan.middleware');
const logger = require('./setting/logger/logger');


const frontendRoute = require('./app/frontend/index.route');


const port = config.port || 3000;


// Add the morgan middleware
app.use(morganMiddleware);

// compresses all the responses
app.use(compression());

  
// adding set of security middlewares
app.use(helmet());

// parse incoming request body and append data to `req.body`
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// enable all CORS request
app.use(cors());


app.get("/api/status", (req, res) => {
	logger.info("Checking the API status: Everything is OK");	
	res.status(200).send({
		status: "UP",
		message: "The API is up and running!"
	});
});

app.use('/api', frontendRoute);

/* Error handler middleware */
app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;	
	logger.error(err.message, err.stack);
	res.status(statusCode).json({ message: err.message });
	return;
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
	res.status(500).json({ message: 'Api Not Found' });
	return;
});


app.listen(port, () => {
	logger.info(`Server is running at http://localhost:${port} (${config.env})`);
});

module.exports = app;
