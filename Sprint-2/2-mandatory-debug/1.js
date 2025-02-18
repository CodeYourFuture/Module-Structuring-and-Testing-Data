// Predict and explain first...
// It must be to show us sum. Amount would be 42.
//  =============> write your prediction here

/*function sum(a, b) {
  return; a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);*/

// =============> write your explanation here
/*In JavaScript, if you follow return with a semicolon 
or move the statement to a new line, the interpreter treats this as the end of the statement. So the code a + b after
 return is not executed. We should delete a semicolon after return. */
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);