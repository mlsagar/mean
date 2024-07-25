require("dotenv").config();
const express = require("express");
const path = require("path");
const routes = require("./router");

const port = process.env.PORT;
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.get("/", function(request, response) {
    response.header({"Content-Type": "text/html"});
    response.status(200).sendFile(path.join(__dirname, "index.html"));
})
app.use("/api", routes);


app.listen(port, console.log(`Listening at ${port}`))