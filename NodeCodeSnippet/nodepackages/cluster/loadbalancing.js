/**
 * Load balance two processes using reverse proxy.
 *
 * Created by prrathore on 2/2/15.
 */

var http = require("http");

//http process 1 running on port 8000
http.createServer(function(request, response) {
    console.log(process.pid + ":  request for " + request.url);
    response.writeHead(200);
    response.end("Hello World!");
}).listen(8001);

//http process 2 running on port 8001
http.createServer(function(request, response) {
    console.log(process.pid + ":  request for " + request.url);
    response.writeHead(200);
    response.end("Hello World!");
}).listen(8002);

//Reverse Proxy server to load balance between two http servers
//TODO: fix proxy server issue
var proxyServer = require("http-proxy");
var servers = [
    {
        host: "localhost",
        port: 8001
    },
    {
        host: "localhost",
        port: 8002
    }
];

proxyServer.createServer(function (req, res, proxy) {
    var target = servers.shift();

    console.log("proxying to " + JSON.stringify(target));
    proxy.proxyRequest(req, res, target);
    servers.push(target);
}).listen(9000);

//httpProxy.createProxyServer({target:'http://localhost:8001'}).listen(8000);
