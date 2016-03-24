// script.js
/*
var bookA = require('./book.js')();
var bookB = require('./book.js')();
bookA.rate(10);
bookB.rate(20);
console.log(bookA.getPoints(), bookB.getPoints());
    */


var BookClass = require('./book.js');
var book = new BookClass();
book.on('rated', function () {
    console.log('Rated with ' + book.getPoints());
});
book.rate(10);


