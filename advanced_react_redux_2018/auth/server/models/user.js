const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define our model
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
});

// On Save Hook, encrypt password

// Before saving a model run this function
userSchema.pre('save', function(next) {
    // Get access to the user model
    const user = this;

    // Generate a salt, then run callback
    bcrypt.genSalt(10, function(err, salt) {
        if (err) { return next(err); }

        // After the salt is created, we are going ot hash (encrypt)
        // the password using the salt
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if (err) { return next(err); }

            // overrite plain text password with encrypted password
            user.password = hash;
            // Go ahead and save the model
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) { return callback(err); }
        callback(null, isMatch);
    });
};

// Create the model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;