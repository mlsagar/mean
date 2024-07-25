const express = require("express");
const { multiplicationOfTwoNumbers } = require("./controller");

const router = express.Router();

router.route("/multiplication/:firstOperand")
    .get(multiplicationOfTwoNumbers);


module.exports = router;