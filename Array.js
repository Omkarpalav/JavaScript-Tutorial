
// Array is to store multiple value in a single variable 
//  Array hold on Object, String, Number and even the another Array.

//let's create the Array.

// Using Array Literal
let fruits = ["Apple","Banana","Cherry"];
console.log(fruits);  // Output : [ 'Apple', 'Banana', 'Cherry' ]

// Using the Array Constuctor
let arry1 = new Array(1,2,3,4,5,"omkar",{age:12,lastName:"palav"}); 
console.log(arry1)     // Output : [ 1, 2, 3, 4, 5, 'omkar', { age: 12, lastName: 'palav' } ]
 
// Length of Array 
console.log(fruits.length);  // Output : 3

// Let's Start Array methods

// push()  : Adds one or more elements to the end
fruits.push("Orange");
console.log(fruits);  // Output : [ 'Apple', 'Banana', 'Cherry', 'Orange' ]

// pop() : Remove the last element.
fruits.pop();
console.log(fruits);  // Output : [ 'Apple', 'Banana', 'Cherry' ]

// unshift() : Adds one or more elements to the beginning.
fruits.unshift("Mango");
console.log(fruits);    // Output : [ 'Mango', 'Santra', 'Apple', 'Banana', 'Cherry' ]

// shift() : Remove the first element from the Array.
fruits.shift();
console.log(fruits);   // Output : [ 'Apple', 'Banana', 'Cherry' ]

// splice()  : Removes elements at specific positions.
let array2 = [1,2,3,4,5,6,7,8,9];
console.log(array2.splice(2,4));  // Output : 3,4,5,6
console.log(array2);  // Output : 1,2,7,8,9

// slice()
const fruits1 = ["apple", "banana", "cherry", "date", "elderberry"];
// Extract elements from index 1 to 3 (excluding index 3)
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // ["banana", "cherry"]

// Extract elements from index 2 to the end
const fromIndexTwo = fruits.slice(2);
console.log(fromIndexTwo); // ["cherry", "date", "elderberry"]

// Extract the last two elements
const lastTwo = fruits.slice(-2);
console.log(lastTwo); // ["date", "elderberry"]

// No arguments: creates a shallow copy
const copy = fruits.slice();
console.log(copy); // ["apple", "banana", "cherry", "date", "elderberry"]

// for()  loop
let students = ["Ram","sham","prachit","Aman","Aditya","Aakash"]
for( let i=0; i < students.length; i++){
    console.log(students[i]);
}

//foreach()  :  The forEach method in JavaScript is used to execute a provided function once for each array element. It's a cleaner and       more readable alternative to the traditional for loop when you need to iterate over an array.

students.forEach(function(stu) {
    console.log(stu);
});

students.forEach(function(stu, index){
    console.log(`${index} : ${stu}`);
});
// Arrow Function
students.forEach((stu,index) => {
    console.log(`${stu} : ${index}`);
})

// map(): Transforms the array and returns a new array.
let student1 = ["Ram","sham","prachit","Aman","Aditya","Aakash"]
let resultstu1 = student1.map(stu => stu.toUpperCase());
console.log(resultstu1)  // [ 'RAM', 'SHAM', 'PRACHIT', 'AMAN', 'ADITYA', 'AAKASH' ]

let num = [2,3,4,5,6,7];
let sqaure = num.map(n => n *2);
console.log(sqaure);  // [ 4, 6, 8, 10, 12, 14 ]

let sqaure1 =  num.map(n => n*3);
console.log(sqaure1);   // [ 6, 9, 12, 15, 18, 21 ]

// filter(): Creates a new array with elements that pass a test.
let evenNumber = num.filter(n => n%2 ==0);
console.log(evenNumber);   //[ 2, 4, 6 ]

// reduce(): Reduces the array to a single value by applying a function.
let sum = num.reduce((n,acc) => acc + n);
console.log(sum);  // 27


// indexOf(): Returns the index of the first occurrence of a value.
// includes(): Checks if an array contains a value.
// find(): Returns the first element that satisfies a condition.
// findIndex(): Returns the index of the first element that satisfies a condition.

let index = fruits.indexOf('Cherry'); // 1
let hasBanana = fruits.includes('Banana'); // true
let firstLongFruit = fruits.find(fruit => fruit.length > 5); // 'Cherry'

// sort(): Sorts the array (by default, lexicographical order).
// reverse(): Reverses the array in place.
let numbers = [5, 3, 8, 1];
numbers.sort((a, b) => a - b); // [1, 3, 5, 8]
numbers.reverse(); // [8, 5, 3, 1]

// Destructuring
let [first, second, ...rest] = fruits;
console.log(first); // 'Apple'
console.log(rest); // ['Cherry']

// Spread Operator
let moreFruits = [...fruits, 'Grapes'];
// ['Apple', 'Cherry', 'Grapes']