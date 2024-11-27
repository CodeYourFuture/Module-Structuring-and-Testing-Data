// Predict and explain first...

// Declare a constant `num` with the value 103
const num = 103;

// Define a function `getLastDigit()` which is intended to return the last digit of a number.
function getLastDigit() {
  // Convert `num` to a string and use `slice(-1)` to get the last character of the string.
  // But `num` is always 103, so this will always return '3' regardless of the argument passed.
  return num.toString().slice(-1);
}

// Log the result of calling `getLastDigit(42)`
// The function doesn't use the argument 42 and will always return '3' (from `num` = 103).
console.log(`The last digit of 42 is ${getLastDigit(42)}`);

// Log the result of calling `getLastDigit(105)`
// The function doesn't use the argument 105 and will always return '3'.
console.log(`The last digit of 105 is ${getLastDigit(105)}`);

// Log the result of calling `getLastDigit(806)`
// The function doesn't use the argument 806 and will always return '3'.
console.log(`The last digit of 806 is ${getLastDigit(806)}`);


// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
