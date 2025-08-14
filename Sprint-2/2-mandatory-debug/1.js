// Predict and explain first...
//  =============> write your prediction here
// Prediction: The function will return `undefined` because the `return` statement has no value.
// The addition `a + b` is placed after the `return` statement and will therefore never be executed.

function sum(a, b) {
  return; // Function execution stops here, returns undefined
  a + b;  // This line is unreachable
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// Explanation:
// The key issue is that in JavaScript, a `return` statement immediately ends the execution of a function
// and returns the specified value. If no value is provided after `return` (i.e., just `return;`),
// the function implicitly returns `undefined`.
// In this `sum` function, the `return;` statement on line 4 causes the function to exit
// before `a + b;` on line 5 can ever be executed.
// As a result, `sum(10, 32)` evaluates to `undefined`, leading to the `console.log` output:
// "The sum of 10 and 32 is undefined".

// Finally, correct the code to fix the problem
//  =============> write your new code here

// Fixed Code:
function sum(a, b) {
  return a + b; // The 'return' statement now correctly returns the sum
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);   // Output: The sum of 10 and 32 is 42