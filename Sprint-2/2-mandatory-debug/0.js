// Predict and explain first...

// =============> write your prediction here
The function should return multiply of two input parameters(a and b) but it returns error .
  
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
Because in the body of function we don't have "return" for output result.we shouldn't use console.log() for printing ther esult of a function.
  
// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
