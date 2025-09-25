// Predict and explain first...

// =============> write your prediction here
/* The function multiply does not return any value, it only logs the product of a and b to the console. 
Therefore, when we try to log the result of multiply(10, 32), it will log 'undefined' because the 
function does not return anything.*/

/*
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/

// =============> write your explanation here
// The function multiply does not have a return statement, so it returns undefined by default.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
