const db = require("../models");

module.exports = {
    create: function(req, res) {
        console.log("create route");
      
        req.body.authors = req.body.authors[0]
        console.log(req.body);
        db.Book
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => {
            console.log(err)
            res.status(422).json(err)
        });
    }
};