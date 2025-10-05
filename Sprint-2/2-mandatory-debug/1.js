// Predict and explain first...
//  =============> write your prediction here : A syntax error for the semicolon after return.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here : The semicolon after return at end of the statement. So there will be no value returned from the function.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
