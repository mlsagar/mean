require("dotenv").config();
const express = require("express");
const path = require("path");
const routes = require("./router");

const port = process.env.PORT;
const application = express();

application.use(express.static(path.join(__dirname, "public")));
application.use("/api", routes);

application.listen(port, console.log(`Listening in ${port}`));

