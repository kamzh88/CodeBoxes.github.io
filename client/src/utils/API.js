import axios from "axios";


export default {
    getBookList: function(search) {
        return axios.get(`/api/books/google/${search}`);
    },
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    getBooks: function() {
        return axios.get("/api/books");
    }
};