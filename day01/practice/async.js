console.log("Start");

setTimeout(function() {
    console.log("Hello after 3 sec");
}, 3000);

setTimeout(function() {
    console.log("Hello after 0 sec");
}, 0);

console.log("End");