function showMe(){
    var shift = Array.prototype.shift
    console.log(shift.apply(arguments));
}

showMe(10);
showMe(1,32,34);

