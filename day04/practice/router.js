const express = require("express");
const { addGame, allGames, game, oneGame } = require("./controller");

const router = express.Router();

router.route("/games")
    .get(allGames)
    .post(addGame);

router.route("/games/:id")
    .get(oneGame)
    .delete(game);


module.exports = router;