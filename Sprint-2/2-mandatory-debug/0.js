// Predict and explain first...

// =============> The code won't run because the function `multiply`
// is not making any calculation and it is not returning any value.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> The result of multiplying 10 and 32 is undefined because
// has not been properly defined to return a value.

// Finally, correct the code to fix the problem
//  =============> Here's the new code:
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
