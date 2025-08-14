// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// The output will be:
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3
// Because getLastDigit always uses the global variable num (103) and ignores the argument.

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// // Now run the code and compare the output to your prediction
// =============> write the output here
// Explain why the output is the way it is
// =============> write your explanation here
// The function getLastDigit does not accept any parameters and always uses the global variable num (103).
// So, regardless of the argument passed, it always returns the last digit of 103, which is "3".

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
