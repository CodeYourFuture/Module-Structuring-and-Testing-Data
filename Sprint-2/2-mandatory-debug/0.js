// Predict and explain first...

// =============> write your prediction here
// I predict that the console will log `320` first (from inside the function), 
// but then the message will say: "The result of multiplying 10 and 32 is undefined".

// Explanation:

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The function `multiply` logs the result of `a * b`, but does not return it. 
// When it's used inside a template literal, JavaScript evaluates `multiply(10, 32)` as `undefined`, 
// because the function has no return value. That's why we get:  
// `The result of multiplying 10 and 32 is undefined` — even though `320` is logged separately.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
