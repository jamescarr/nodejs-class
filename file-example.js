require.paths.unshift(__dirname);

var fs = require('fs');
var greeter = require('greeter');
var dude = new(require('greeter').Person)

console.log(greeter.greet('Uberconf Peeps'));
console.log(dude.greet());


fs.readFile(__dirname + '/file-example.js', function(err, data){
    if(err){
        console.log(err);
    }else{
        console.log(data.toString('base64'));
    }
});

