var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function nice(request, response){
    response.end("You are nice")
}

function mean(Request, response){
    response.end("You are a prat")
}

var serverNice = http.createServer(nice);
var serverMean = http.createServer(mean);

serverNice.listen(PORT1, function(){
    console.log("Listening on: " + PORT1)
})

serverMean.listen(PORT2, function(){
    console.log("Listening on: " + PORT2)
})