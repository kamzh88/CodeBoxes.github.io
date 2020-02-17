const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/")
    .post(booksController.create)
    .get(booksController.findAll);

module.exports = router;