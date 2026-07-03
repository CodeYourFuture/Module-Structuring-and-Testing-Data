// Predict and explain first...

// =============> write your prediction here
/* The code will return "The result of multiplying 10 and 32 is undefined" because the function logs the result instead of returning it. 
Multiply(10, 32) returns udefined, and that's what gets inserted into the template string. */

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
/* Inside the function, console.log(a * b) prints the answer to the console, but the function does not return any value, so it returns undefined. 
when we call multiply(10, 32) ,the function prints 320 to the console, but the return value of the function is undefined.
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`); inserts the returned value, not the logged value. Since the function returns undefined,
the final output becomes "The result of multiplying 10 and 32 is undefined". */

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
