require("dotenv").config();
const express = require("express");
const path = require("path");


const application = express();
const port = process.env.PORT;

application.use(express.static(path.join(__dirname, "public")));


application.listen(port, console.log(`Application listening at ${port}`));