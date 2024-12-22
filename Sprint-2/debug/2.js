// Predict and explain first...

//const num = 103;

function getLastDigit(numLast) {
  return numLast.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

/* This program should tell the user the last digit of each number.
 the function doesn’t have a parameter to receive the num variable it’s trying to process. 
// Explain why getLastDigit is not working properly - correct the problem 
function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);



function getLastDigit() {
  return num.toString().slice(-1);
}*/
// FIX

/*const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

function getLastDigit() {
  return num.toString().slice(-1);
}

gisdellabella@Giss-MBP debug % node 2.js
The last digit of 42 is 3
The last digit of 105 is 3
The last digit of 806 is 3
42
gisdellabella@Giss-MBP debug */