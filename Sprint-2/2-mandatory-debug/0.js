// Predict and explain first...

// =============> write your prediction here
    // there is no return statement in the multiply function, so when we try to log the result of the function call, it will return undefined. 
/* original code 
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/
// =============> write your explanation here
    // console.log will do  the multiplication of a and b and print the result to the console, but it will not return any value.
    // there is no operation done here. just for testing purpose not actual operation. 
// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  console.log(a * b);
  return a * b; // new code added to return the result of the multiplication.
}