var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('name', function(n){
    console.log(n);
});

emitter.on('name', function(n){
    console.log("I saw " + n);
});

emitter.emit('name', 'James');

