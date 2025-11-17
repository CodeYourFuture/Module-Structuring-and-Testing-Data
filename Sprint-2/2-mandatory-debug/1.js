// Predict and explain first...
//  =============> I guess that the output will be undefined because there is a semicolon after the "return" and this breaks the line of code, and after return statement nothing can be returned

// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> The output is "The sum of 10 and 32 is undefined" as I predicted above
// Finally, correct the code to fix the problem
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
