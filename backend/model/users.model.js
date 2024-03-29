const mongoose = require('mongoose');
//const uniqueValidator = require("mongoose-unique-validator");


const schema = mongoose.Schema({
    email: { type: String, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});

// schema.set('toJSON', { virtuals: true });
//schema.plugin(uniqueValidator);

module.exports = mongoose.model('User', schema, 'User');
