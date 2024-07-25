const {readFileSync} = require("fs");

console.log("Start");
const buffer = readFileSync("large-file.txt")
console.log(buffer.toString().substring(0, 23));
console.log("End");