// Predict and explain first...
//  =============> I am expecting the following output: The sum of 10 and 32 is undefined

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here: When the function sum(10, 32) is invoked in line 9, it passes 10 for a dn b for 32 as parameters.
// in line 5, the returns does the job but returns undefined value since it isn't associated with any expression (e.g., return a + b).
// Finally, correct the code to fix the problem

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
