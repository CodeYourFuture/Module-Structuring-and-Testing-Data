// Predict and explain first...

// =============> write your prediction here

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here

// I can see that the function does not return a value; it only logs the result.
// Inside the function call multiply(10, 32), a = 10 and b = 32.
// It runs console.log(a * b), which simply logs 320 to the console but does not return anything.
// When a function doesn't explicitly return a value, it returns undefined by default.
// Therefore, the result of multiplying 10 and 32 is undefined when used inside the template string.
// The console output will be:
320
The result of multiplying 10 and 32 is undefined


//  =============> write your new code here

// The original function only logged the result using console.log and did not return a value.
// As a result, using it inside a template string would return 'undefined'.
// To fix this, we add a return statement so that the function returns the result of the multiplication.

function multiply(a, b) {
  return a * b;
}

// Now the function returns the result, and it can be correctly used inside the template literal.

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
