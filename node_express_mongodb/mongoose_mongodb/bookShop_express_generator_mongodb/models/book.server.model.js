var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
    bookId: String,
    bookName: String,
    author: String,
    price: Number,
    publisher: String
});

mongoose.model('Book', BookSchema)
