const express = require("express");
const { allGames, addGame, oneGame, game } = require("./controller");

const router = express("router");

router.route("/games")
    .get(allGames)
    .post(addGame);

router.route("/games/:id")
    .get(oneGame)
    
router.route("/games/delete/:id")
    .delete(game)



module.exports = router;