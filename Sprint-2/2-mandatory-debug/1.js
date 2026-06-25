// Predict and explain first...
//  =============> write your prediction here

// This will throw an error because there is a semicolon after return statement.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here

//The sum of 10 and 32 is undefined

// The above error message is displayed when tested with node.
// The cause of the error message is the semicolon that is placed after the return statement.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);