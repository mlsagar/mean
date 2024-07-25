const express = require("express");
const { allGames } = require("./controller");
const router = express.Router();

router.route("/games")
    .get(allGames);

module.exports = router;