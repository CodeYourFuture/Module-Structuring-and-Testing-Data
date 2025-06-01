// Predict and explain first...

// =============> write your prediction here
  // I think I'll see the result posted first then the string

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
  // I think what's happening is that the function only logs the answer to the console but does not return anything.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return (a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);