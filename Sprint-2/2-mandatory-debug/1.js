// Predict and explain first...
//  =============> the return statement is placed before the actual sum,
// which means that the function will return undefined before it can calculate the sum of a and b.
// Therefore, the output will be "The sum of 10 and 32 is undefined".

//function sum(a, b) {
// return;
//a + b;
//}

//console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> The program behaved as predicted
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  add = a + b;
  return add;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
