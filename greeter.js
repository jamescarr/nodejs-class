var message = "Hello "

function Person(){
    var name = "Lebowski";
    this.greet = function(){
      return message + name;   
    }
}

module.exports = {
    greet: function(name){
        return message+name;
    },
    Person:Person
}

