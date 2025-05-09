// Predict and explain first...

// =============> write your prediction here. Answer: we will get an error that says undefined

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here. Answer: console.log doesn't allow the evaluated value to be used outside the function

// Finally, correct the code to fix the problem
//  =============> write your new code here
//Answer: New code
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
