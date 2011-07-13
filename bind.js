function sum(a,b){
    return a + b + this.x;
}

var addFive = sum.bind({x:5});

console.log(addFive(3, 2));

function incrementor(x){
    return this.sum += x;
}
var up = incrementor.bind({sum:0});

console.log(up(5));
console.log(up(5));
console.log(up(5));
console.log(up(5));

console.log(incrementor(3))
