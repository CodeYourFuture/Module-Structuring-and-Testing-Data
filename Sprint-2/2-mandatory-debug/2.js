// Predict and explain first...
// This code is intended to find the last digit of a number, but it has a bug.

// Predict the output of the following code:
// Predict the output of the following code is '3' for the input 103. since the last digit of 103 is 3 and it is  a global variable, so regardless of the input, it will always return the last digit of the global variable `num` which is 103.
// =============> Write your prediction here

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// =============> write the output here
// Explain why the output is the way it is
// =============> write your explanation here
// The output is always '3' because the function `getLastDigit` is using a global variable `num` which is set to 103
// Finally, correct the code to fix the problem
// =============> write your new code here
function getLastDigit(num) {
  return num.toString().slice(-1);
}
console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
