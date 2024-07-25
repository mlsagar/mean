const { readFile } = require("fs")

console.log("Start");
readFile("large-file.txt", function(error, data) {
    console.log(data.toString().substring(0, 19));
})
console.log("End");