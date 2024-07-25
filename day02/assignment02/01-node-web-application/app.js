const http = require("http");
const { readFile } = require("fs")

const routeToIndexPage = function(req, res) {
    readFile("./index.html", "utf8", htmlPageHandler(res));
}

const routePage1 = function(req, res) {
    readFile("./page1.html", "utf8", htmlPageHandler(res));
}

const routeToPage2 = function(req, res) {
    readFile("./page2.html", "utf8", htmlPageHandler(res));
}

const htmlPageHandler = function (response){
   return function(err, data) {
        response.setHeader("Content-Type", "text/html");
        response.writeHead(200);
        response.end(data);
    }
}

const JSONHandler = function(request, response) {
    response.setHeader("Content-Type", "application/json");
    response.writeHead(200);
    response.end('{"message": "Post Successfully!!!"}');
}

const staticAndDynamicServer = function(req, res) {
    if (req.method === "GET") {
        switch(req.url) {
            case "/index.html":
            case '/':
                routeToIndexPage(req, res);
                break;
            case "/page1.html":
                routePage1(req, res);
                break;
            case "/page2.html":
                routeToPage2(req, res);
                break;
            default:
                res.end("400 resource not found");
        }
    } else if(req.method === "POST") {
        JSONHandler(req, res);
    }
    
}


const server = http.createServer(staticAndDynamicServer);


server.listen(8282, "localhost", function() {
    console.log("Server is running on port 8282");
})

