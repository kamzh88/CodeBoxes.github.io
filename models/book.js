const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true }, 
    subtitle: { type: String, required: false },
    authors: { type: String, required: true },
    description: { type: String, required: false },
    link: { type: String, required: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;