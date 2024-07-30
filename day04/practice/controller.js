const databaseConnection = require("./data/dbconnection");

const callbackify = require("util").callbackify;

const handleAllGamesCallbackify = function (offset, count) {
    const database = databaseConnection.get();
    const gameCollection = database.collection("games");
    return gameCollection.find().skip(offset).limit(count).toArray();
}

const gameCollectionFindCallbackify = callbackify(handleAllGamesCallbackify)

const allGames = function (request, response) {
    let count = parseInt(process.env.DATA_COUNT_INITIAL_VALUE, process.env.RADIX_VALUE);
    let offset = parseInt(process.env.DATA_OFFSET_INITIAL_VALUE, process.env.RADIX_VALUE);

    if (request.query && request.query.offset) {
        offset = parseInt(request.query.offset, process.env.RADIX_VALUE);
    }

    if (request.query && request.query.count) {
        count = parseInt(request.query.count, process.env.RADIX_VALUE);
    }

    if (isNaN(count) || isNaN(offset)) {
        response.status(400).send({ error: "Invalid count or offset" });
    }

    gameCollectionFindCallbackify(offset, count, handleAllGames.bind(null, response));

}

const handleAllGames = function(response, error, client) {
        if (error) {
            response.status(500).send({ error: "Error fetching games" });
            return;
        }
        response.status(200).json(client);

}



const addGame = function (request, response) {

}

const oneGame = function (request, response) {

}

const game = function (request, response) {

}

module.exports = {
    allGames,
    addGame,
    oneGame,
    game
}