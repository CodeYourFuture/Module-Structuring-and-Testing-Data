// Predict and explain first...

// =============> write your prediction here
// I think it will return undefined.
/*
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/
// =============> write your explanation here
// The function multiply does not have a return statement, so it returns undefined by default.
// The string, it will show "The result of multiplying 10 and 32 is undefined".

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
