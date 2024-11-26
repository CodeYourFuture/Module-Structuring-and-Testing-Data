// Predict and explain first...

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

______________________________SOLUTION______________________________________________
// Function Behavior:

function sum(a, b) {
  return;
  a + b;
}

// The return statement is followed by a semicolon (;), which causes the function to terminate immediately.
// The subsequent line a + b is never executed because it comes after the return statement.
// Therefore, the function returns undefined.


console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

/*
The function sum(10, 32) is called.
Since the function returns undefined, the placeholder ${sum(10, 32)} in the template literal resolves to undefined.
*/

/*The outputs will be:

The sum of 10 and 32 is undefined
*/

// To correct this behavior, we must rewrite the sum function to include the a + b calculation in the return statement:

function sum(a, b) {
  return a + b; // Returns the sum of a and b
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`); 
// Outputs the correct result:          The sum of 10 and 32 is 42
