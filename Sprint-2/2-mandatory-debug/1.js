// Predict and explain first...
//  =============> write your prediction here: Answer 💡: looks like it will fail because of the way return is written

/*function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
*/

// =============> write your explanation here: The error occurs because the return statement is used incorrectly. It has a semicolon after it, which causes the function to return undefined immediately, and the line `a + b;` is never executed.
// Finally, correct the code to fix the problem
//  =============>

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`); // logs "The sum of 10 and 32 is 42"
