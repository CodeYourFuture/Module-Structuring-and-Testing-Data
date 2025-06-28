// Predict and explain first...

// =============> write your prediction here
// This code will not produce the expected string output. Instead, it will:
// Log the result of the multiplication directly (320)
// Then print:The result of multiplying 10 and 32 is undefined

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// multiply(10, 32) runs inside the template literal.
// Inside the multiply function, console.log(a * b) prints 320 to the console.
// However, the multiply function does not return a value → so it returns undefined by default.

// Finally, correct the code to fix the problem
//You should return the result from the function instead of logging it directly:
function multiply(a, b) {
  return a * b;
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
//  =============> write your new code here
