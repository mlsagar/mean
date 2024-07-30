const MongoClient = require("mongodb").MongoClient;
let _connection = null;

const callbackify = require("util").callbackify;
const mongoClientConnectCallbackify = callbackify(function(url) {
    return MongoClient.connect(url);
})

const open = function() {
    if (get() == null) {
        mongoClientConnectCallbackify(process.env.DATABASE_URL, handleDatabaseConnection);
    }
}

const handleDatabaseConnection = function(error, client) {    
    if (error) {
        console.log("DB connection failed");
        return;
    }
    _connection = client.db(process.env.DATABASE_NAME);
    console.log("DB connection open", _connection);
}

const get = function() {
    return _connection;
}

module.exports = {
    open,
    get
}