const MongoClient = require("mongodb").MongoClient;
let _connection = null;

const open = function() {
    if (get() === null) {
        MongoClient.connect(process.env.DB_URL, handleDbConnection);
    }
}

const handleDbConnection = function(error, client) {
    if (error) {
        console.log("DB connection failed");
        return;
    }
    _connection= client.db(process.env.DB_NAME);
    console.log("DB connection open", _connection);
}

const get = function() {
    return _connection;
}

module.exports = {
    open,
    get
}