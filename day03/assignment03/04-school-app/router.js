const express = require("express");
const { allStudents, oneStudent } = require("./controller");

const router = express.Router();

router.route("/students")
    .get(allStudents)

router.route("/students/:index")
    .get(oneStudent)

module.exports = router;