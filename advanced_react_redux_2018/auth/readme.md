# Server Setup for Authentication Exercise

## Server Setup (from scratch)  

- Within project directory, make a new directory titled server
- cd server
- npm init  
    (this intstalls package.json file, just keep hitting enter for each question)
- Create .gitignore file
- Add node_modules to .gitignore
- Install the following dependencies  
    npm install --save express mongoose morgan body-parser
- Create a file called index.js
- Add the following code for an initial server setup:  
    (note using require because node doesn't support ES6 import statements yet)  
    ```const express = require('express');
        const http = require('http');
        const bodyParser = require('body-parser');
        const morgan = require('morgan');
        const app = express();

        const port = process.env.PORT || 3000;
        const server = http.createServer(app);
        server.listen(port);
        console.log('Server is listening on port: ', port);
    ```
    The first three lines are just importing dependencies.  
    For the app variable, we are creating an instance of express.  
    For the 'port' variable, we are saying that if there is an environment variable of PORT already defined, use that, otherwise use port 3000  
    The server line creates an http server that knows how to receive requests and forward anything that comes in to our express app.
