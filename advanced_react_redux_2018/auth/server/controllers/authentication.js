const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
    const timeStamp = new Date().getTime();
    return jwt.encode({sub: user.id, iat: timeStamp}, config.secret);
};

exports.signup = function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password) {
        return res.status(422).send({ error: 'You must provide emaial and password' });
    }

    // See if a user with a given email exists
    User.findOne({ email: email }, function(err, existingUser) {
        if (err) { return next(err); }

        // If a user with email does exist, return an error
        if (existingUser) {
            return res.status(422).send({ error: 'Email is in use' });
        }

        // If a user with email does not exist, create and save user record
        const user = new User({
            email: email,
            password: password
        });

        // saves the user to the database
        user.save(function(err) {
            if (err) { return next(err); }

            // Respond to request indicating the user was created
            res.json({ token: tokenForUser(user)});
        });
    });
};