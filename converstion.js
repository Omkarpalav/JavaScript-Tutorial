
// String to Number Conversition
let str = "12345";
console.log(typeof str, "=", str);   //Output : string = 12345
let numStr = Number(str);
console.log(typeof numStr, "=", numStr)   //Output : number = 12345


//Number to String Conversition
let num = 987654;
console.log(typeof num, "=", num);  //Output : number = 987654
let strNum = String (num);
console.log(typeof strNum, "=", strNum);   //Output : string = 987654

//Boolean to String
let bool = true
console.log(typeof bool, "=", bool);  // Output : boolean = true
let boolStr = String(bool);
console.log(typeof boolStr, "=", boolStr);  // Output : string = true

let abc = "523xyz";
console.log(typeof abc, abc);  // Output : string = 523xyz
let abcNumber = Number(abc);  
console.log(typeof abcNumber, abcNumber);  // Output : number = NaN
let abcBool = Boolean(abc);
console.log(typeof abcBool, abcBool);  // Output : boolean = true