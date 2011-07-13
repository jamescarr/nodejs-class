process.openStdin().on('data', function(data){
    var input = data.toString().replace(/\n/, '');
    console.log(up(parseInt(input)));
});

function incrementor(a){
    return this.sum += a;
}

var up = incrementor.bind({sum:0});

