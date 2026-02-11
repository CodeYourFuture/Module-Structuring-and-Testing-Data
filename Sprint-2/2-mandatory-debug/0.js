// Predict and explain first...

// =============> write your prediction here

// I predict the result will not be displayed correctly.
// The multiply function logs the result but does not return it,
// so the template literal will receive undefined.

// function multiply(a, b) {
// console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here

// The multiply function uses console.log to print the result,
// but it does not return the value
// When the function is used inside the template literal,
// it returns undefined because functions return undefined
// if there is no return statement.


// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
