const express = require("express");
const { allStudent, oneStudent, addStudent } = require("./controller");

const router = express.Router();

router.route("/students")
    .get(allStudent)
    .post(addStudent);

router.route("/students/:index")
    .get(oneStudent)




module.exports = router;