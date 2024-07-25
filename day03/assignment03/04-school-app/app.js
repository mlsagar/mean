require("dotenv").config();
const express = require("express");

const routes = require("./router");

const port = process.env.PORT;

const application = express();

application.use("/api", routes);

application.listen(port, console.log(`Listening at ${port}`));