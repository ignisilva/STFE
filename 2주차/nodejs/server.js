var http = require("http");
var fs = require("fs");

var mySet = function (request, response) {
  var url = request.url;
  if (url === "/") {
    url = "/index.html";
  }
  response.writeHead(200, { "Content-Type": "text/html" });
  var htmlFile = fs.readFileSync(__dirname + url);
  response.end(htmlFile);
};

var app = http.createServer(mySet);
app.listen(8080, function () {
  console.log("server run on port 8080");
});
