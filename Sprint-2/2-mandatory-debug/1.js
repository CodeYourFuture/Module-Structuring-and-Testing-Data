// Predict and explain first...
//  =============> write your prediction here

// Prediction:
// The program will print "The sum of 10 and 32 is undefined".
// This happens because the return statement is written incorrectly.
// JavaScript stops executing a function immediately after "return".
// Since nothing is returned, the function returns undefined.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);


// =============> write your explanation here

// Explanation:
// In JavaScript, when "return" is written on its own line,
// the function stops immediately and returns undefined.
// The line "a + b;" is never executed.
// That is why sum(10, 32) becomes undefined.
// The issue is caused by the line break after return.


// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);//32
