const studentRawData = require("./data/school.json");

const allStudents = function(request, response) {
    response.status(200).json(studentRawData);
}

const oneStudent = function(request, response) {
    const index = request.params.index;
    response.status(200).json(studentRawData[index]);
}

module.exports = {
    allStudents,
    oneStudent
}