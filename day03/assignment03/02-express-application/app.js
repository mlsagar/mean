require("dotenv").config();
const express = require("express");
const routes = require("./router");

const port = process.env.PORT;
const application = express();

application.use("/", routes);


application.listen(port, console.log(`Listening in ${port}`));