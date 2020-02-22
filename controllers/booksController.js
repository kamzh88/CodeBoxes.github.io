const db = require("../models");
const axios = require("axios");
require('dotenv').config();

const APIKEY = process.env.REACT_APP_BOOKS_KEY;

module.exports = {
    create: function(req, res) {   
        req.body.authors = req.body.authors[0]
        db.Book
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => {
            res.status(422).json(err)
        });
    },
    findAll: function(req, res) {
        db.Book
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    google: function (req, res) {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.search}&maxResults=20&key=${APIKEY}`).then(
            function (resp) {
                res.json(resp.data);
            }
        ).catch (e => console.log(e))
    }
};