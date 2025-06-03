// Predict and explain first...

// =============> the function isn't returning anything, or passing/breaking(?); can functions do visible console output?

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
//  The result of multiplying 10 and 32 is undefined
//  The function isn't returning anything specific, so the default returned value is undefined.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return(a*b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}!`);
