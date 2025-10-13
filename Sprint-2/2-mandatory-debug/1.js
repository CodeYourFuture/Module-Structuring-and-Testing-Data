// Predict and explain first...

//  =============> write your prediction here
/*
The function 'sum' does not return the sum of 'a' and 'b' because there is a semicolon immediately after the 'return' statement.
This causes the function to return 'undefined' instead of the intended sum.
*/
/*
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
*/
// =============> write your explanation here
/*
1. In JavaScript, when a 'return' statement is followed by a newline, it is treated as if there is a semicolon immediately after 'return'.
2. This means that the function exits at the 'return' statement and does not execute the next line, which contains the actual sum operation.
3. As a result, the function returns 'undefined' instead of the sum of 'a' and 'b'.
4. To fix this, we need to place the expression to be returned on the same line as the 'return' statement.
*/
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
