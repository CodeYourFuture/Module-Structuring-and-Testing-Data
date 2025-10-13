// Predict and explain first...
/*
The function 'multiply' does not return any value, it only logs the product of 'a' and 'b' to the console, within itself. 
Therefore, when we try to use its result in a template literal, it will be 'undefined'.
In the below, i expect the TWO outputs to be, 320 and The result of multiplying 10 and 32 is undefined.
*/
// =============> write your prediction here
/*
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/
// =============> write your explanation here
/*
1. I will change the function to return the product of 'a' and 'b' instead of logging it. 
This way, when we call 'multiply(10, 32)', it will return 320,
 which can then be used in the template literal.
*/
// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
