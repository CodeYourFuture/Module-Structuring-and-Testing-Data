// Predict and explain first...
//  =============> write your prediction here
// the return function is already completed with the semi-colon ';' so the function would not continue from
// there

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
//the sum of 10 and 32 is undefined, so the function ended at the return to solve this add the 'a + b' to 'return'
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
