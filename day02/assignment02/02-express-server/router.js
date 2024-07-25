const express = require("express");

const routes = express.Router();

const handleJSON = function(req, res, next) {
    res.status(200).send("{'message': 'Post Successfully!!!'}")
}

routes.post("/", handleJSON);

module.exports = routes