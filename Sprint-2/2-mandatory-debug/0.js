// Predict and explain first...

// =============> I think this code will not show the correct result because the function logs the answer instead of returning it.

/*function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/

// =============> write your explanation here
/*First, the function multiplies 10 and 32 and prints the result. However, in the second console.log 
the value becomes undefined because the function does not return anything, so the template string 
receives undefined instead of the number.*/

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
