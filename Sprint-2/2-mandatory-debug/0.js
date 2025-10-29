// Predict and explain first...

// =============> write your prediction here
// Output: "320" then "The result of multiplying 10 and 32 is undefined"
// Function logs but doesn't return, so template literal receives undefined

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// Bug: console.log() prints but doesn't return a value - functions without return give undefined
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}
