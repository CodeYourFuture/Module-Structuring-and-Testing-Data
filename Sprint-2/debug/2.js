// Predict and explain first...

// const num = 103; this variable is a universal one. function needs its local variable.

function getLastDigit(num) {
  let lastDigit = num.toString().slice(-1);
  return lastDigit;
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
