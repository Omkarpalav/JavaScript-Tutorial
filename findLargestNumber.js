

let number = [12,34,56,78,909,100];
let largest = [0];

for(i=1; i<number.length;i++){
    if(number[i] > largest) {
        largest = number[i]; 
    }
}
console.log("The largest Number : ",largest);    // Output : The largest Number : 909


