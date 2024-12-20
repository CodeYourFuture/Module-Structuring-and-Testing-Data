// Predict and explain first...
//* When this code run we will call the sum function with two parameters (a and b) by the template literal, inside of the function
// when return statement execute code will exit the function and any statement after return won't execute (line a + b) so it will ignore 
// so value in the template literal would be undefined.

//* To fix this we need to pass the sum in the return statement
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
