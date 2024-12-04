
// If a number is divisible by 3, print "Fizz" instead of the number.
// If a number is divisible by 5, print "Buzz" instead of the number.
// If a number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.


for(i=1; i<=100; i++){
    if(i%3===0 && i%5===0){
        console.log("FuzzBuzz");
    }else if(i%3===0){
        console.log("Fuzz");
    }else if(i%5===0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}