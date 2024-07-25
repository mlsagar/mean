const fibonacci = function(number) {
    const absoluteNumber = number < 0 ? Math.abs(number) : number;
    if (absoluteNumber <= 2) {
        return 1;
    } else {
        return fibonacci(absoluteNumber - 1) + fibonacci(absoluteNumber - 2);
    }
}


console.log("Fibonnaci of -53 is", fibonacci(-53));
console.log("Fibonnaci of 19 is", fibonacci(19));