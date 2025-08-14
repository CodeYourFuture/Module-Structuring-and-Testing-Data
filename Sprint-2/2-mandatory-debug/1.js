// Predict and explain first...
//  =============> write your prediction here
/* I predict that the result will be undefined. There is a line breaker 
after the return function it will not return the sum of (a, b). */

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
/* When I run the code in the terminal the output I get says (The sum of 10 and 32 is undefined)
this means that the line breaker ; after the return function has stopped the sum operation from functioning*/

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
