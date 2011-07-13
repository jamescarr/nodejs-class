console.log('log');

var x = 0;

var handler = setInterval(function(){
   
   console.log(new Date());
   if(x++ >=4){
    clearInterval(handler);
   }
}, 1000);


