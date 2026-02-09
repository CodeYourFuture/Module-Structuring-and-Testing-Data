// Predict and explain first...
//  =============> It will give an error; line 5 and 6 should be in one line.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> The output is undefined because return and a + b are in two different lines.
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(sum(10, 32));
