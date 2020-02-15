import axios from "axios";

const APIKEY = process.env.REACT_APP_BOOKS_KEY;

export default {
    getBookList: function() {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=Harry+Potter+inauthor:Rowling&key=${APIKEY}`);
    },
}