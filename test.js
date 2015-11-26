var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHandler = function () {
  console.log('Connection ok!');
  eventEmitter.emit('data received');
};

eventEmitter.on('data_received',connectHandler);

eventEmitter.on('connection',connectHandler);

eventEmitter.emit('connection');

console.log('Program Ended!');
