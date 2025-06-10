// Predict and explain first...

// =============> write your prediction here
// The code will log the result of multiplying 10 and 32, but it will not return a value from the multiply function.
// The console.log inside the multiply function will execute, but the final log statement will show "undefined" because the function does not return a value.

/*function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);*/

// =============> write your explanation here
// The code defines a function `multiply` that takes two parameters `a` and `b`, multiplies them, and logs the result.
// However, the function does not return any value, so when we try to log the result of `multiply(10, 32)`, it returns `undefined`.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b; // Return the result of the multiplication
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`); // Now this will log the correct result
