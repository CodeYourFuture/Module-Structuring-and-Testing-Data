// Predict and explain first...

// =============> write your prediction here
// PREDICTION: The function will log the result of the multiplication, but the template literal will not include the result because multiply() does not return a value.

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here

// EXPLANATION: The multiply function logs the product of a and b, but it does not return any value. When we try to use multiply(10, 32) inside the template literal, it evaluates to undefined because there is no return statement in the function. Therefore, the output will be "The result of multiplying 10 and 32 is undefined".
// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
