
// Question: Write a function that takes two numbers as input and returns their sum, difference, product, and quotient.

function calculateOperation(num1,num2){
    const sum = num1 + num2 ;
    console.log("sum :",sum);
    const difference = num1 - num2;
    console.log('difference :', difference);
    const product = num1 * num2;
    console.log("product", product)
    const quotient = num2 !== 0 ? num1 / num2: "Division by zero is not allowed";
    console.log("quotient", quotient); 
}
calculateOperation(110, 10);

// OUTPUT :
    // sum : 120
    // difference : 100
    // product 1100
    // quotient 11


