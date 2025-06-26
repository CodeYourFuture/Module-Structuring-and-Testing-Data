// Predict and explain first... 
//  The function sum(a, b) includes a return statement followed by a line with 'a + b'.
// error:-The sum of a and b is undefined 

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// The return statement ends before 'a + b' due to JavaScript's automatic semicolon insertion.
// As a result, the function returns undefined and 'a + b' is never executed.

// Finally, correct the code to fix the problem

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);