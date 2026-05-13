// Predict and explain first...
//  =============> write your prediction here
// the sum function won't return anything to the console.log
// because the semicolon ends that line of logic

/* Original code:
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
*/

// =============> write your explanation here
// As before, the function returns "undefined" as nothing is returned

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
