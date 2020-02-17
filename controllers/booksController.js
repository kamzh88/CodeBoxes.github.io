const db = require("../models");

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
    }
};