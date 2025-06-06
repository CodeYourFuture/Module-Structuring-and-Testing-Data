// Predict and explain first...
//  =============> write your prediction here
// The function will return undefined because the `return` statement has no value. 
// The addition `a + b` is after the return and will never be executed.


function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here

//The key issue is that in JavaScript, a return statement ends the function immediately and returns the specified value (or undefined if no value is given).
//Here, since return has no expression after it, the function returns undefined.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);   // Output: The sum of 10 and 32 is 42