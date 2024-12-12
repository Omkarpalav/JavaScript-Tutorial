
// 1. Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("omkar"));  // Output : Hello, omkar!

// 2. Functiin Expression 
const userName = function (name) {
    return `Hii, ${name}!`;
}
console.log(userName("omakr"));  // Output : Hii, Sam!

// 3. Arrow Function 
const checkName = (name) => {
    return `Namste, ${name}!`;
}
console.log(checkName("Prachit"));
 
const checkNameShort = (name) => `Welcome, ${name}`;
console.log(checkNameShort("Ram"));

// Parameters and Default Values  : Functions can take parameters, and you can set default values for them:


function lastName (last = "palav") {
    return `My last name is : ${last}`;
    
}
console.log(lastName());
console.log(lastName("Parab"));