// Predict and explain first...
//  The function sum(a,b) will not return the correct result because return statement is used before the actual summation (a+b), so it will return undefined


/*
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
*/

// In the function sum(a,b), the statement return; is used withoud a value, meaning the function will return undefined.
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10,32)}`);