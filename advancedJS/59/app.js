function abcd(fn){
    fn(function(fn2){
        fn2(function(){
            console.log("Hello from nested callbacks!");
        }); 
    });
} 

abcd(function(fn){
    fn(function(fn3){
        fn3();
    }); 
});
   
