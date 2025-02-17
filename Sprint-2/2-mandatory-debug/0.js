// Predict and explain first...

// =============> write your prediction here

// Answer | There will be an error. 
// console.log will just print the multiplication result in the console, will not pass the multiplication value.
/* function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/
// =============> write your explanation here
// The console.log in the multiply frame should be replaced with return so that the function will return the value of the function when called.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);