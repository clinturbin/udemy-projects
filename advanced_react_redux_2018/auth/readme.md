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

## App Setup
- Add the following code:
    ```
    app.use(morgan('combine'));
    app.use(bodyParser.json({ type: '*/*' }));
    ```
    - morgan and bodyParser are referred to as middleware in Express middleware is something that any incoming request is passed to so any incoming request will be passed to morgan and bodyParser app.use registers them as middleware
    - morgan is a logging framework, it logs incoming requests. (mostly used for debugging)
    - bodyParser is a middleware that is used to parse incoming requests. Specifically it is going to parse it into json, and will attempt to do so no matter what the type is. Basically any incoming request is going to be parsed as json.
- npm install --save nodemon  
    (nodemon watches out project directory for any file changes. If a file changes it is going to automatically restart the server)
- Add the following line to the package.json file scripts object:  
    - "dev": "nodemon index.js"
        (in terminal just enter 'npm run dev'. This will start nodemon)

## Route Handlers
- Add new file called router.js  
    We are going to export a function from this file and import it into index.js and will pass app into that function  
    It will look something like:  
    ```
    module.exports = function(app) {
        app.get('/', function(req, res, next) {
            res.send(['water bottle', 'phone', 'paper']);
        });
    };
    ```
    The above makes a GET request to '/' and sends back an array of items.  
    'req' is an object that represents the incoming http request. It basically has a lot of data about the request being made  
    'res' represents the response that is sent back to whoever made the request  
    'next' is mostly for error handling

- Add the following code into index.js 
    ```
    const router = require('./router');

    router(app);
    ```
## Connecting to MongoDB
- To work with MongoDB, we are going to be working with Mongoose, which is called an ORM.  It is a library that is used to interface with the MongoDB database.
    - To make use of Mongoose we first need to create a user model that represents a user. (Our user will have 2 attributes, an email and a password)
    - Within server directory, create a new directory called models
    - Within models directory create file called user.js  
    (inside this file will be a local definition of exactly what a user is)
    - Inside user.js:
        - Import dependencies:  
            ```
            const mongoose = require('mongoose');
            const Schema = mongoose.Schema;
            ```
        - Define our model:  
            ```
            const userSchema = new Schema({
                email: { type: String, unique: true, lowercase: true },
                password: String
            });
            ```
            (note: 'lowercase' converts string to lowercase for uniqueness testing)
        - Create the model class:  
            ```
            const ModelClass = mongoose.model('user', userSchema);
            ```
            This basically loads the schema into mongoose  and tells it there is a new schema about a user that corresponds to a collection names 'user'.
        - Export the model:
            ```
            module.exports = ModelClass;
            ```
- If mongodb is not currently installed go to mongodb.com to download and follow the instructions for your operating system.
- Then we need to tell mongoose to connect to the instance of mongodb  
     - inside index.js add the following code
     ```
     const mongoose = require('mongoose');


