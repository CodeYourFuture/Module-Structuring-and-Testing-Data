// Predict and explain first...

// I think the code will not give an error, but it will print
// "The sum of 10 and 32 is undefined" because the return statement
// stops the function before a + b can run.



function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here

// The problem is that `return;` ends the function immediately.
// The code after return will never be reached, so the function
// does not return the sum of a and b. It returns undefined instead.

// Finally, correct the code to fix the problem

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);