// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express(); // creates an instance of express


// Server setup
const port = process.env.PORT || 3000;
// if there is an environment variable of PORT already defined, use that, otherwise use port 3000
const server = http.createServer(app);
// create an http server that knows how to receive requests
// and anything that comes in go ahead and forward it to our express app
server.listen(port);
console.log('Server is listening on port: ', port);

