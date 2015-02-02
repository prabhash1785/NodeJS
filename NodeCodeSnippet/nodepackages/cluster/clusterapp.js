/**
 * Sample application using cluster module to scale node application
 *
 * Created by prrathore on 2/1/15.
 */

var os = require('os');
var winston = require('winston');

var http = require("http");
var cluster = require("cluster");
var numCPUs = os.cpus().length;

if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
        console.log("Forking child");
        cluster.fork();
    }

    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });

    for (var id in cluster.workers) {
        console.log("Slave Process ID: " + id);
        //cluster.workers[id].kill(); //kill all slave processes
    }

} else {
    http.createServer(function(request, response) {
        winston.info(process.pid + ":  request for " + request.url);
        response.writeHead(200);
        response.end("Hello World!");
    }).listen(8000);
}