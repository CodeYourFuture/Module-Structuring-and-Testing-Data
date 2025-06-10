// Predict and explain first...
//  =============> write your prediction here
// The code will not return the sum of `a` and `b` because the `return` statement is placed before the expression `a + b`.
// The function `sum` will return `undefined`, and the console log will display "The sum of 10 and 32 is undefined".

/*function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);*/

// =============> write your explanation here
// The code defines a function `sum` that is intended to return the sum of two numbers `a` and `b`.
// However, the `return` statement is placed before the expression `a + b`, which means the function will return `undefined`.


// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b; // Move the return statement to return the sum of a and b
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`); // Now this will log the correct sum