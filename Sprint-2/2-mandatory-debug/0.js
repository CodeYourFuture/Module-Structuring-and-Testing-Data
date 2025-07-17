// Predict and explain first...

// Prediction: The program will first print `320` to the console and then print `The result of multiplying 10 and 32 is undefined`.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// Explanation: The `multiply` function uses `console.log(a * b)` to display the product but does not explicitly return any value. In JavaScript, functions without a `return` statement implicitly return `undefined`. Therefore, when `multiply(10, 32)` is called within the `console.log` statement, it logs `320` and then returns `undefined`, which is then used in the string interpolation.

// Finally, correct the code to fix the problem
// New Code:
// function multiply(a, b) {
//   return a * b;
// }
// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
