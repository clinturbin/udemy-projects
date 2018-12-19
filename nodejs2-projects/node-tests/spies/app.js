let db = require('./db');

module.exports.handleSignup = (email, password) => {
    // Check if email already exists
    // save the user to the database
    db.saveUser({ email, password });
    // Send welcome email
}