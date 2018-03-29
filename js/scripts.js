$(document).ready(function ()  {
    //create an array
    var arr = [];
    //begin the loop
    function test(num){

            for (i = 1; i <= num; i++) {
                //detect values divisble by 3, 5 and 15

                if (i % 3 === 0 && i % 5 === 0 ) {
                    //push to the array
                    console.log(i+" pingpong")
                    arr.push("pingpong");
                }
                //detect values divisible by 3
                else if (i % 3 === 0) {
                    console.log(i+" ping")
                    arr.push("ping");
                }
                //detect values divisible by 15
                else if (i % 5 === 0) {
                    console.log(i+" pong")
                    arr.push("pong");
                }else{
                    arr.push(i);
                }  }

            }
        
   
    
    $(".btn").click(function(event){
        event.preventDefault();
       var passedNumber =  parseInt($("#num").val());
 
       test(passedNumber);
       arr.forEach(function(e){
             $("#list-items").append($("<li>").html(e));
         });
       

    });
});
