// Predict and explain first...

// =============> write your prediction here
// When the code is run the product of a and b will be logged to the console however the console log portion that relates to the function call will show undefined because the function doesn't return anything 

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
  // As the function has no return statement it returns undefined by default.
// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);