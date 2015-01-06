/**
 * Compress file using zlib module.
 *
 * Created by prrathore on 1/6/15.
 */

var fs = require("fs");
var zlib = require("zlib");
var gzip = zlib.createGzip();
var input = fs.createReadStream(__dirname + "/StreamSample.js");
var output = fs.createWriteStream("input.txt.gz");

input.pipe(gzip).pipe(output);
