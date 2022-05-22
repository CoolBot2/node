var http = require('http');
var fs = require('fs');
// var url = require('url');
var port = 8081
http.createServer( function (request, response) {  
  //  var pathname = url.parse(request.url).pathname;
   
  //  console.log("Request for " + pathname + " received.");
  fs.readFile("index.html", function(err,data){
    if(err){
      response.writeHead(404)
      response.write("there is an error 404" )

    }
    else{
      response.write(data)
    }
    response.end()
  })   
}).listen(8080);
console.log('Server running on port ');