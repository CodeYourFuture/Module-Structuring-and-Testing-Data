// Predict and explain first...

// =============> write your prediction here
/* The function multiply(a,b) prints the result but does not return a value. 
When it is used inside  ${multiply(10, 32)}, it returns undefined. 
*/

/*
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/

// =============> write your explanation here
/* The function prints (console.log(a*b);) but does not return anything. 
The correct approach is to use return instead console.log inside the function.
*/
// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply (a, b) {
  return a * b;
}
 
console.log (`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);