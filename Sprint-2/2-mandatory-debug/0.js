// Predict and explain first...

// =============> write your prediction here
// In this example function is being called but as there's no return statement so it will return undefined.
// and a *b multiplication. and the line on line 10
/*function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/
// =============> write your explanation here
// I fixed it by adding a return statement and create another variable outside of the function that stores,
//value of function.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return (a*b);
}
const result = multiply(10,32);
console.log(`The result of multiplying 10 and 32 is ${result}`);
