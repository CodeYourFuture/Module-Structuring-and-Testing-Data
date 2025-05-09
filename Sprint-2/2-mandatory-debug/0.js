// Predict and explain first...

// =============> write your prediction here
/*
an error will occur because the multiply function doesn't return a value
console.log will log the result when the function is called but will not return 
anything the output would be something like
320 
The result of multiplying 10 and 32 Undefined 
*/

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
/*
  the multiplication function do the multiplication and logs the result using 
  console.log(a*b);
  but since there is no return statement the function multiply(10,32) will return 
  undefined
*/

// Finally, correct the code to fix the problem
//  =============> write your new code here
/*
function multiply(a, b) {
  return (a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/