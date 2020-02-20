const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.Node_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get("/", function (req, res) {
    res.json(path.join(__dirname, "public/index.html"));
});

app.use(routes);

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password1@ds215988.mlab.com:15988/heroku_hcnggx6f");

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});