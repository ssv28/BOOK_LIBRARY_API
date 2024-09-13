const mongoose = require('mongoose');
const Schema = mongoose.Schema;   // Create a new schema

const userSchema = new Schema({

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

    membershipData: {
        type: Date,
        default: Date.now,
    }, 

    borrowedBooks : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "BORROW"
    }

});

const USER = mongoose.model('USER', userSchema);     // Create a model from the schema
module.exports = USER;  // Export the model