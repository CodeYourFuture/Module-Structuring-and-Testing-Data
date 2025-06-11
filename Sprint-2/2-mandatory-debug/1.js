// Predict and explain first...
//  =============> write your prediction here
// This is a function to sum two numbers, 10 and 32, and show a message with the result.
// Will return undefined error because the 'return' of the function is empty.
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The return of the execution code in the function must be the operation a + b
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a,b){
  return a + b;
}
console.log(`The sum of 10 and 32 is ${sum(10,32)}`);
