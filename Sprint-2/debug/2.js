// Predict and explain first...

// const num = 103; // the variable num is in a global scope

// function getLastDigit() { // the parameter is not definated
//   return num.toString().slice(-1);// however here it the num in the global scope is accessed and converted to a string, where the slice (-1) takes out its last figure.
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);
// 
// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
