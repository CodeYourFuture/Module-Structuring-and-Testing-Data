// Predict and explain first...

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// The function getLastDigit is supposed to find the last digit of a number, but it always returns the last digit of 103 which is stored in the variable num
// But we want to it to work with any number
// To fix this, we need to allow getLastDigit to take a number as input (also called a parameter). This way, the function can work with any number you give it.

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);

console.log(`The last digit of 105 is ${getLastDigit(105)}`);

console.log(`The last digit of 806 is ${getLastDigit(806)}`);
