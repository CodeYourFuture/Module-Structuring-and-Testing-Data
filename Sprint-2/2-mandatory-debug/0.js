// Predict and explain first...

// The code below is intended to multiply two numbers and log the result.
// However, it currently does not return the result correctly.
// The function `multiply` is defined to take two parameters `a` and `b`.
// It logs the product of `a` and `b` but does not return it.
// The console.log statement outside the function attempts to log the result of calling `multiply(10, 32)`.
// The expected output is "The result of multiplying 10 and 32 is 320".
// However, since `multiply` does not return a value, the output will be "The result of multiplying 10 and 32 is undefined".
// =============> write your prediction here

function multiply(a, b) {
  // This function multiplies two numbers and logs the result
  // but does not return it.
  // It should return the product instead of just logging it.
  // The current implementation will not return the product.
  //console.log(a * b);
  // This line should be changed to return the product
  return a * b; // Corrected to return the product
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
// =============> write your explanation here
// // The code is intended to multiply two numbers and log the result.
// However, it currently does not return the result correctly.
// The expected output is "The result of multiplying 10 and 32 is 320".
// The current output will be "The result of multiplying 10 and 32 is undefined".

// Finally, correct the code to fix the problem
//  =============> write your new code here
