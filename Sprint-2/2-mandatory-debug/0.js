// Predict and explain first...

// =============> write your prediction here
// Martin response - the function call will return undefined as there is no return value in the multiply function

function multiply(a, b) {
  console.log(a * b);
}

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// Martin response - the parameters a and b are multiplied and logged inside the function, but there is no return value so the return value from the function is undefined

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
