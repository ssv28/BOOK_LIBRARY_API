const mongoose = require('mongoose');
const Schema = mongoose.Schema;   // Create a new schema

const adminSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        default: 'admin'
    },

    permissions: {
        type: [String],
        default: []
    },

});

const ADMIN = mongoose.model('ADMIN', adminSchema);     // Create a model from the schema

module.exports = ADMIN;  // Export the model