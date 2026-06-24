// Predict and explain first...
//  =============> write your prediction here

//The sum would return as undefined.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here

// Explanation: The return keyword is used and the functions is not executed because the expression is on a different line
//which means the computer would not run the expression alongside the return keyword.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
