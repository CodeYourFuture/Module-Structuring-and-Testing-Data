// Predict and explain first...
//  =============> write your prediction here

// The code will return undefined because the return statement has come before the calculation (a + b).

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here

// The sum function is expecting to add two numbers, but the return statement is placed before the calculation, causing it to return undefined instead of printing the correct sum



// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);