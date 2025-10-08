// Predict and explain first...
//  I predict that the output will be:
// The sum of 10 and 32 is undefined

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// My explanation; The issue is with the semicolon after return:

// When JavaScript sees return; with a semicolon, it immediately exits the function
// The line a + b; is never executed because it comes after the return statement
// Since return; doesn't return any value, the function returns undefined
// Therefore, the template literal shows "The sum of 10 and 32 is undefined"
// This is an example of automatic semicolon insertion causing unexpected behavior.


// Finally, correct the code to fix the problem
// My new code:


function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`); 

// Now the output will be:
// The sum of 10 and 32 is 42

// The fix:

// I removed the semicolon after return so the expression a + b is properly returned
// The function now correctly calculates and returns the sum