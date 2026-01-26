// Predict and explain first...

// =============> the result of the multiply is printed inside function, and at the function call is will be undefined

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> because function is not returning any value

// Finally, correct the code to fix the problem
//  =============> return a * b;
