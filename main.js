// var http = require("http");
// var fs = require('fs')
// fs.readFile('input.txt','r+',function(err,data){
//   if (err){
//     return console.log(err);
//   }
//   console.log("asynchronous");
// })
// http.createServer(function (request, response) {

//    response.writeHead(200);

//    response.end('Hello World\n');
// }).listen(8081);

// console.log('Server running at http://127.0.0.1:8081/');
function printHello() {
  console.log( "Hello, World!");
}

setTimeout(printHello, 3000);