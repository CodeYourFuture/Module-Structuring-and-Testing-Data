// Predict and explain first...

// My prediction:
// This function has a return statement with no value after it, so it will return undefined.
// The log will say "The sum of 10 and 32 is undefined"

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// Actual:
// I was correct in my prediction.
// When I ran this code in VSCcode terminal -> % node 1.js, the output was:
// The sum of 10 and 32 is undefined
// This is because https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#return_value
// There's no value after the keyword return, so the function returns undefined
// The code stops executing at the return statement, so the a + b is never executed
// I could fix this by removing the return statement and moving the a + b to the same line as the return statement

// function sum(a, b) {
//   return a + b;
// }
