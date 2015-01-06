/**
 * Decompress a file using zlib.
 *
 * Created by prrathore on 1/6/15.
 */

var fs = require("fs");
var zlib = require("zlib");
var gunzip = zlib.createGunzip();
var input = fs.createReadStream("input.txt.gz");
var output = fs.createWriteStream("output.js");

input.pipe(gunzip).pipe(output);