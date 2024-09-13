const mongoose = require('mongoose');
const Schema = mongoose.Schema;   // Create a new schema

const borrowSchema = new Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'USER',
        required: true
    },

    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BOOKS',
        required: true
    },

    borrowDate: {
        type: Date,
        default: Date.now
    },

    returnDate: {
        type: Date
    },

    isReturned: {
        type: Boolean,
        default: false
    }


});

const BORROW = mongoose.model('BORROW', borrowSchema);     // Create a model from the schema
module.exports = BORROW;  // Export the model
