// Predict and explain first...
//  =============> write your prediction here
  // Nothing will be returned. The operation "a + b" is after the return. Anything after the return is not executed.
  // The output would be "The sum of 10 and 32 is undefined"

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
  // Anything after the return is not executed.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
