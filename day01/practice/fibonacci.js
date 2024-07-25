const fibonacci = function(number) {
    if (number <= 2) {
        return 1;
    } else {
        return fibonacci(number - 1) + fibonacci(number - 2);
    }
}

console.log("The fibonacci of number 27 is", fibonacci(27));