// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// output: last degit of 42 is undefined. the function is not taking in any arguments. num is has hardcoded. the function currently returns the last digit of num which is 103.
const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
/* $ node 2.js
The last digit of 42 is 3
The last digit of 105 is 3
The last digit of 806 is 3
*/
// Explain why the output is the way it is
// =============> write your explanation here
// output is always 3 cause num is hardcoded to 103. the function does not take in any args, so it always returns the last digit of 103
// Finally, correct the code to fix the problem
// =============> write your new code here
/*
function getLastDigit(num) {
  return num.toString().slice(-1);
}
  console.log(`The last digit of 42 is ${getLastDigit(42)}`);
  console.log(`The last digit of 105 is ${getLastDigit(105)}`);
  console.log(`The last digit of 806 is ${getLastDigit(806)}`);
  */

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
