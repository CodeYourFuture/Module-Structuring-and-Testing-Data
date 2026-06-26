// Predict and explain first...
//  =============> write your prediction here // will print undefined.
/*function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);*/

// =============> write your explanation here.// The code will print undefined because the function sum does not return any value. Instead, it has a return statement with no value, because the semicolon ended the return statement  which means it will return undefined by default. The second line of the function, a + b, is never executed because the return statement ends the function execution before it can be reached.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
