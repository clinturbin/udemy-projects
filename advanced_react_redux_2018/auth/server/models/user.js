const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Schema is what we use to tell mongoose about the particular fields our model is going to have

// Define our model
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
});

// Create the model class
const ModelClass = mongoose.model('user', userSchema);
// This basically loads the schema into mongoose  and tells it there is a new schema about a user that corresponds to a collection names 'user'

// Export the model
module.exports = ModelClass;