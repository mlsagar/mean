const http = require("http");
const fs = require("fs");

const router = function (request, response) {
    if (request.method === "GET") {
        switch (request.url) {
            case "/":
            case "/index.html":
                fs.readFile(__dirname + "/index.html", "utf8", handleHTMLContent(response));
                break;
            case "/page1.html":
                fs.readFile(__dirname + "/page1.html", "utf8", handleHTMLContent(response));
                break;
            case "/page2.html":
                fs.readFile(__dirname + "/page2.html", "utf8", handleHTMLContent(response));
                break;
            default:
                response.writeHead(404, { "Content-Type": "text/plain" });
                response.end("400 resource not found");
        }
    } else if (request.method === "POST") {
        response.writeHead(200, { "Content-Type": "application/json" })
        response.end("{'message': 'Posted Successfully!!!'}");
    }
}

const handleHTMLContent = function (response) {
    return function (error, data) {
        if (error) {
            response.writeHead("404");
            response.end("404 File not found");
        } else {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.end(data);
        }
    }
}

const app = http.createServer(router);

app.listen(3000, "localhost", console.log("Listening at 3000"));

