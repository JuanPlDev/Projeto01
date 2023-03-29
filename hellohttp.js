// importa a biblioteca que usa http e url
const http = require('http');
const url = require('url');
const fs = require('fs');

function readFile(response, file){
    fs.readFile(file, function(err, data){
        response.end(data);
    });
}
// Criar uma função para trabalhar no servidor
var callback = function (request, response){
    
    var parts = url.parse(request.url);
    var path = parts.path;

    if (parts.path == "/"){
        response.writeHead(200, {"Content-type" : "text/plain"});
        readFile(response, "siteBatata.html");
    } else if (parts.path == "/rota1"){
        response.writeHead(200, {"Content-type" : "application/pdf"});
        readFile(response, "arquivo1.pdf");
    }else if(parts.path == "/rota2"){
        response.writeHead(200, {"Content-type" : "application/json"});
        readFile(response, "arquivo2.json");
    } else if (parts.path == "/rota3"){
        response.writeHead(200, {"Content-type" : "image/png"});
        readFile(response, "arquivo3.png");
    } else if (parts.path == "/rota4"){
        response.writeHead(200, {"Content-type" : "apllication/zip"});
        readFile(response, "arquivo4.zip");
    }   else if (parts.path == "/rota5"){
        response.writeHead(200, {"Content-type" : "text/html"});
        readFile(response, "Geradores.html");
    }   else if (parts.path == "/rota6"){
        response.writeHead(200, {"Content-type" : "text/html"});
        readFile(response, "Siteunicsul.html");
    } else{
        response.writeHead(200, {"Content-type" : "text/html"});
        readFile(response, "Site404.html");
    }

}
// montar servidor
var server = http.createServer(callback)
server.listen(3000);
console.log("[Server - ok] ... Servidor montado em http://localhost:3000");