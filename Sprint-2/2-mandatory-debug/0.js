// Predict and explain first...

// =============> write your prediction here
/*
multiply function is not return any value, it just calls console.log.
It will cause an error in console.log function which is outside the function.
*/
/*
function multiply(a, b) {
  console.log(a * b);
  }
  
  console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/

// =============> write your explanation here
/*
When I ran the code, the error is not thrown but the function return value is undefined.
320
The result of multiplying 10 and 32 is undefined
*/
// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
   return (a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

