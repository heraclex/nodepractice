/**
 * Created by tle on 2/5/2016.
 */
var fs = require("fs");
fs.readFile('input.txt', function (err, data) {
    if (err){
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
});
console.log("Program Ended");

/*
 var fs = require('fs');
 fs.writeFile('data.txt', 'Hello world!', function (err) {
 if(err) { throw err; }
 console.log('It is saved!');
 });
 fs.readFile('data.txt', function(err, data) {
 if (err) throw err;
 console.log(data.toString());
 });
 */