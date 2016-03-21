/**
 * Created by tle on 2/5/2016.
 */

// Import events module
var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();
// Create an event handler as follows
var connectHandler = function connected() {
    console.log('connection successful.');

    // Fire the data_received event
    eventEmitter.emit('data_received', 'tests', 1);
    // Fire the data_received event
    eventEmitter.emit('data_received', 'test', 2);
}
// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(paramStr, p1){
    console.log('data received successfully.' + paramStr + ' '+p1 );
});
// Fire the connection event
eventEmitter.emit('connection');
console.log("Program Ended.");
