// Predict and explain first...

// Predict : //The expected outcome when running this code is that instead of displaying the result of the multiplication,
//it will show undefined. This is because the multiply function only logs the result to the console instead of returning it.
//Therefore, when multiply(10, 32) is used inside ${}, there is no returned value, resulting in undefined.

//explain ://The issue arises because the multiply function does not return a value. In JavaScript,
//if a function does not explicitly return a value, it defaults to returning undefined. Consequently,
//when multiply(10, 32) is placed within the template literal in console.log, it outputs undefined instead of the expected result.

//Fix://To resolve this issue, add a return statement in the multiply function, as shown below:

// =============> write your prediction here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here

// Finally, correct the code to fix the problem
//  =============> write your new code here
