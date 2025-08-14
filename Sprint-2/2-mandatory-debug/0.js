// Predict and explain first...

// =============> write your prediction here: the function has no return. Hence multiply ${multiply(10, 32)} will return undefined.

function multiply(a, b) {
  console.log(a * b);
}

console.log (`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here:
// console.log(a*b) logs the result of the multiplication to the console but does not return any value.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return (a * b);
}

console.log (`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
