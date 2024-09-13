const mongoose = require('mongoose');
const Schema = mongoose.Schema;   // Create a new schema

const booksSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    isbn: {
        type: String,
        required: true,
        unique: true
    },

    publishedDate: {
        type: Date,
        default: Date.now
    },

    category: {
        type: String,
        required: true
    },

    language: {
        type: String,
        required: true
    },

    copiesAvailable: {
        type: Number,
        default: 1,
        required: true
    },

    summary: {
        type: String,
        required: true

    },

    borrowed: {
        type: Boolean,
        default: false,
        required: true

    },


});

const BOOKS = mongoose.model('BOOKS', booksSchema);     // Create a model from the schema
module.exports = BOOKS;  // Export the model