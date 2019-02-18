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

## Encrypting passwords with BCrypt
- Install bcrypt  
    ```
    npm install --save bcrypt-nodejs
    ```
- Using bcrypt  
    - go back to user.js file
        - Import bcrypt library
        ```
        const bcrypt = require('bcrypt-nodejs');
        ```
        - Add the following code  
        ```
        userSchema.pre('save', function(next) {
            const user = this;
            bcrypt.genSalt(10, function(err, salt) {
                if (err) { return next(err); }
                bcrypt.hash(user.password, salt, null, function(err, hash) {
                    if (err) { return next(err); }
                    user.password = hash;
                    next();
                });
            });
        });
        ```
        When we save a password, we generate a salt.  A salt is a randomly generated string of characters.  By combining a salt and a plain password, we get get a hashed password.  The newly generated password that gets saved to the database contains both the salt and the hashed password.  This is going to be very important for signing in a user.
## Creating a JSON Web Token
- npm install --save jwt-simple
- Next we need to create a secret string  
    - add new file called config.js in root project directory
    - add config.js to .gitignore file
    - import jwt and config into authentication file
    ```
    const jwt = require('jwt-simple');
    const config = require('../config');
    ```
- In authentication.js file, make a function that is going to take a users id and encode it with our secret
```
function tokenForUser(user) {
    const timeStamp = new Date().getTime();
    return jwt.encode({sub: user.id, iat: timeStamp}, config.secret);
};
```
jwt is a convention.  As a convention json web tokens have a sub property, which is short for subject. Subject means who is this token about. So, we are saying the subject of this token is the specific user with user.id. iat is another convention of json web tokens that stands for 'issued at time.'
- Add token to the signup route  
    ```
    user.save(function(err) {
        if (err) { return next(err); }
        res.json({ token: tokenForUser(user)});
    });
    ```
## Installing Passport  
Passport is what's going to help us authenticate a user when they attempt to visit a route that requires authentication.
- npm install --save passport passport-jwt
- Make a new folder to hold all of our passport configuration  
    - make a new folder called services (within the server folder)
    - inside the services folder create file called passport.js
    - inside passport.js import the following:  
    ```
    const passport = require('passport');
    const User = require('../models/user');
    const config = require('../config');
    const JwtStrategy = require('passport-jwt').Strategy;
    const ExtractJwt = require('passport-jwt').ExtractJwt;
    ```

