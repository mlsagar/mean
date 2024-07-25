const {readFile} = require("fs");

const logFirstTwentyWordFromFile = function(error, data) {
    console.log(data.toString().substring(0, 20));
}

console.log("Start");
readFile("large-file.txt", logFirstTwentyWordFromFile);
console.log("End");