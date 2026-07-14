// Predict and explain first...
//  =============> write your prediction here
/* Because the function has a return statement with nothing after it, the code will return: The sum of 10 and 32 is udefined.
The line a + b will never run because it comes after the return. */

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
/* When JavaScript sees a return statement, it immediately stops the function. So the function exits before it ever reaches a + b. 
Because nothing is returned, JavaScript returns undefined. The template string uses the returned value. The line: console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
inserts whatever the function returns. since the function returns undefined, the final output becomes: The sum of 10 and 32 is undefined. Even though a + b is written in the function, it returns undefined. */ 

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}
 
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);