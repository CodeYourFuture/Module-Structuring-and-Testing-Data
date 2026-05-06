// Predict and explain first...

// =============> write your prediction here
// logging the result of the function will always be undefined, since it doesn't return anything.
// if the inputs are two numbers, should console log the right number, e.g. (2, 2) -> 4 (2.5, 2.5) -> 6.25
// otherwise, it might produce incorrect results

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(2, "asdf")}`);

// =============> write your explanation here
// Javascript tries to cast non-number values to numbers before multiplying. So, "3" to 3 for example.
// if the value can't be converted to a number, it might cause unpredictable or incorrect outputs.
// e.g. Boolean true is converted to numeric 1, so true * 2 becomes 1 * 2 = 2.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  if (Number.isFinite(a) && Number.isFinite(b)) {
    return a * b;
  }
  throw new TypeError("Arguments must be finite numbers");
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
