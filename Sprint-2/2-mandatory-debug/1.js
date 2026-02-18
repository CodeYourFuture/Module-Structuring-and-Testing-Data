// Predict and explain first...
//  =============> write your prediction here - should show undefined as there are ";" after return inside the function
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// Finally, correct the code to fix the problem
//  =============> write your new code here - you can't divide the return parameters with ";"
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);