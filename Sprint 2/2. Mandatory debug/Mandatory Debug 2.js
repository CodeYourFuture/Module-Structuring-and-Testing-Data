// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// The code will throw an error because `getLastDigit` does not use the argument passed to it.

// Corrected code:
const num = 103;

function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`); 
//The output for console.log cases will be 2, 5, 6.
// This program should tell the user the last digit of each number.
// The issue was that `getLastDigit` was not using the argument passed to it, instead relying on the global `num` variable.
