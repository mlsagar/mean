
const multiplicationOfTwoNumbers = function(request, response) {
    const firstOperand = parseInt(request.params.firstOperand);
    let secondOperand = 1;
    if (request.query && request.query.secondOperand) {
        secondOperand = parseInt(request.query.secondOperand);
    }
    const total = firstOperand * secondOperand;
    response.status(200).json(`{'Product of ${firstOperand} and ${secondOperand} is': ${total}}`);
}

module.exports = {
    multiplicationOfTwoNumbers
}