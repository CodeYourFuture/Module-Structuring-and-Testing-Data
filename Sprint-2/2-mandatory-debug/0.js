// Predict and explain first...

// =============> write your prediction here - It will print 320 inside the function, but the template string will show "undefined" because multiply does not return a value.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here - multiply() uses console.log to display the result, but it doesn't return anything. In JavaScript, a function with no return statement returns undefined, so ${multiply(10, 32)} becomes undefined even though 320 was logged earlier.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiplyFixed(a, b) {
  return a * b;
}
console.log(`The result of multiplying 10 and 32 is ${multiplyFixed(10, 32)}`);
