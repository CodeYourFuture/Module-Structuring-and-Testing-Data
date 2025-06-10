// Predict and explain first...

// =============> write your prediction here

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The error occurs because the `multiply` function does not return a value; it only logs the result to the console.
// Therefore, when trying to use the result in the template literal, it results in `undefined` being printed.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b; // Return the result instead of logging it
} 
