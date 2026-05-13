// Predict and explain first...

// =============> write your prediction here
// The multiple function doesn't return anything
// the console log that calls the multiple function will not receive anything back, this
// may cause an error

/* Original code:
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/

// =============> write your explanation here
// code works, however the log gave 'undefined' instead of the multiplication output
// this is because the multiply function doesn't return any value

// Finally, correct the code to fix the problem

//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
