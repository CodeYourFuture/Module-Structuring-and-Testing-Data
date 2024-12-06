// Predict and explain first...

const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

It is not working properly because only one varibale was declared, wich is num, 
so the function gives one value 3 times, wish is the last digit of (105) and 
says all other values are undefined. 

correcting the problem : 

let num1 = 42;
let num2 = 105;
let num3 = 806;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(num1)}`);
console.log(`The last digit of 105 is ${getLastDigit(num2)}`);
console.log(`The last digit of 806 is ${getLastDigit(num3)}`);
 
I declared the 3 varibales and fixed the getlastDigit Function.