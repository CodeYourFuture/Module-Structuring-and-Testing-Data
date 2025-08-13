// Predict and explain first...

// =============> Prediction:
 // The code will not throw an error, but the output will be `undefined`
 // because the `multiply` function does not return a value.

/*
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/

// =============> Explanation:
// The output is `undefined` because the `multiply` function logs the result 
// of the multiplication to the console but does not return it.
// This is because the `console.log` inside the function does not affect the 
// return value of the function.
// As it is, the `multiply` function only performs a console log and does not
// return any value.

// Finally, correct the code to fix the problem
//  =============> Correction:

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
// Output: The result of multiplying 10 and 32 is 320 
