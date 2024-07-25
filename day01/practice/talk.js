// console.log("Talk is from outside");
const greeting = function() {
    console.log("Hello its me");
}

const log = function() {
    console.log("This is another function");
}

module.exports = {
    greeting,
    logger: log
}