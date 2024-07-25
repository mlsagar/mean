const gamesRawData = require("./data/games.json");

const allGames = function(request, response) {
    response.status(200).json(gamesRawData);
}

module.exports = {
    allGames
}