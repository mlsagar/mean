const { ObjectId } = require("mongodb");
const dbconnection = require("./data/dbconnection");

const handleAllGames = function (response) {
    return function (err, result) {
        response.status(200).json(result);
    }
}

const handleAddGame = function (response) {

    return function (error, result) {
        if (error) {
            response.status(500).json({ message: "Internal server error" });
            return;
        }

        response.status(200).json({ message: "Posted game successfully" });
    }
}

const handleOneGame = function (response) {
    return function (error, result) {
        if (error) {
            response.status(500).json({ message: "Internal server error" });
            return;
        }

        response.status(200).json(result);
    }
}

const handleDeleteGame = function (response) {
    return function (error, result) {
        if (error) {
            response.status(500).json({ message: "Internal server error" });
            return;
        }

        response.status(200).json({message: "Deleted Item Successfully!!!"});
    }
}

const allGames = function (request, response) {
    const db = dbconnection.get();
    const gameCollection = db.collection("games");

    let offset = 0;
    let count = 3;
    if (request.params && request.params) {
        offset = parseInt(request.params.offset);
    }
    if (request.query && request.query.count) {
        count = parseInt(request.query.count);
    }

    gameCollection.find().skip(offset).limit(count > 7 ? 7 : count).toArray(handleAllGames(response));
}

const addGame = function (request, response) {
    if (request.body && request.body.title && request.body.price && request.body.minPlayers > 0 && request.body.minPlayers <= 10
        && request.body.minAge >= 7 && request.body.minAge <= 99) {
        const db = dbconnection.get();
        const gameCollection = db.collection("games");

        gameCollection.insertOne(request.body, handleAddGame(response));

    } else {
        response.status(400).json({ message: "Invalid request body" });
    }
}

const oneGame = function (request, response) {
    const db = dbconnection.get();
    const gameCollection = db.collection("games");

    const gameId = request.params.id;
    gameCollection.find({ _id: new ObjectId(gameId) }).toArray(handleOneGame(response));
}

const game = function (request, response) {
    const db = dbconnection.get();
    const gameCollection = db.collection("games");

    const gameId = request.params.id;

    gameCollection.deleteOne({ _id: new ObjectId(gameId) }, handleDeleteGame(response))
}

module.exports = {
    allGames,
    addGame,
    oneGame,
    game
}