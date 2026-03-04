// Predict and explain first...
//  =============> write your prediction here
// 

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
when I run the program it give this output:
The sum of 10 and 32 is undefined

the output is undefiened because the function sum does not return any CSSMathValue. to fix this error we need to change the return statement to return a + b instead of just return. 
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
