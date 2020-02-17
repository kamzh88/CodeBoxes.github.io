import axios from "axios";

const APIKEY = process.env.REACT_APP_BOOKS_KEY;

export default {
    getBookList: function(search) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=20&key=${APIKEY}`);
    },
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    getBooks: function() {
        return axios.get("/api/books");
    }
};