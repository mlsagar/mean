const fs = require("fs");
const path = require("path");

const studentRawData = require("./data/mwa_students.json");

const allStudent = function(request, response) {
    // respond.status(200).json(studentRawData);

    let offset = 0;
    let count = 5;

    if (request.query && request.query.offset) {
        offset = parseInt(request.query.offset);
    }

    if (request.query && request.query.count) {
        count = parseInt(request.query.count);
    }

    const manipulateData = studentRawData.slice(offset, count+offset);
    response.status(200).json(manipulateData);
}

const addStudent = function(request, response) {
    const newData = [...studentRawData, request.body];
    fs.writeFile(path.join(__dirname, "data/mwa_students.json"), JSON.stringify(newData), handleWriteFile(response))
}

const oneStudent = function(request, response) {
    const index = request.params.index;
    response.status(200).json(studentRawData[index]);
}

const handleWriteFile = function(response) {
    return function(error) {
        if (error) {
            response.status(500).json(`{'message': ${error.message}}`);
        }
        response.status(200).json("{'message': 'Posted Successfully!!!'}");
    }
}

module.exports = {
    allStudent,
    oneStudent,
    addStudent
}