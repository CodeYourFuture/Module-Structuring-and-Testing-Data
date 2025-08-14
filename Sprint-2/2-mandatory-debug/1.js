// Predict and explain first...
//  =============> the return statement is on a different line with a+b and it won't return any value


function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> The output is undefined because the function contains return which is on a separate line before a + b;
// when a return statement appears alone without an expression on the same line, it returns undefined
// meaning that a + b; is never executed

// Finally, correct the code to fix the problem
//  =============> 
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
