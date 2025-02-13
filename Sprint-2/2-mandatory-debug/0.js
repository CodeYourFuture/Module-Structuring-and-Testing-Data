// Predict and explain first...


// =============> write your prediction here
// not returning any thing from function so if we call function it will not print output outside of function.

function multiply(a, b) {
  console.log(a * b);
}

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
/*
320
The result of multiplying 10 and 32 is undefined. This output i got as we are not returning any thing from function. 
so  in line 11 we are getting undefined to resolve it need to return output of this function.
*/

// Finally, correct the code to fix the problem
//  =============> write your new code here
/*
function multiply(a, b) {
  console.log(a * b);
  return (a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/
