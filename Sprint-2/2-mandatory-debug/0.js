// Predict and explain first...

// =============> write your prediction here
// The function will print 320 from inside multiply,
// but the final console.log will show "undefined"
// because multiply does not return a value.

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The function multiply only logs the result using console.log,
// but it does not return the value.
// Since it does not return anything, JavaScript returns undefined by default.
// Therefore, the template string inserts undefined.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);


