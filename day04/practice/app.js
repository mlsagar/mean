require("dotenv").config();
require("./data/dbconnection").open();
const express = require("express");
const path = require("path");

const routes = require("./router");


const port = process.env.PORT;
const application = express();

application.use(express.static(path.join(__dirname, "public")));

application.use(express.json());
application.use(express.urlencoded({ extended: true }));

application.use("/api", routes);


application.listen(port, console.log(`Listening at ${port}`));