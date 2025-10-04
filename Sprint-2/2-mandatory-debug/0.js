// Predict and explain first...

// =============> write your prediction here : There is no return statement for the parameters.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here : /* The function multiply does not return any value, it only logs the result to the console. It returns undefined. To fix this, we need to add a return statement in the multiply function. */

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
