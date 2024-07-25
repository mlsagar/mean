const express = require("express");

const router = express.Router();

router.route("/json")
    .get(function(req, res) {
        res.status(200).json({"data": "apple"})
    })
    .post(function(req, res) {
        res.status(200).json({"message": "Post Successfully"})
    });

module.exports = router;