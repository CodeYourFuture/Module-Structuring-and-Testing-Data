// Predict and explain first...
//  =============> write your prediction here : There will be an error in return line.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here :  The return statement ends the function immediately. Since there is a line break after return, JavaScript automatically inserts a semicolon, so the function returns undefined and the expression a + b is never executed.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
