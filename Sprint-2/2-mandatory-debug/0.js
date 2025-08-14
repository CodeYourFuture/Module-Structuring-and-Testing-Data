// Predict and explain first...

// =============> write your prediction here
// The code will show an error because the function does not have a return value.

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The code will throw an error because the function `multiply` does not return a value, but the console.log statement expects a value to be printed.
// The function `multiply` is defined to log the result of multiplying two numbers, but it does not return anything, leading to an undefined value being logged.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b; // Change console.log to return the result
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
