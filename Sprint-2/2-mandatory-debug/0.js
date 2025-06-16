// Predict and explain first...

/* Function structure in JavaScript 
function functionName(parameters) {
return result ;
}
The return statement makes the function stop executing and ends the function.
In this code there is ne return statement Therefore, I think this code will cause an error.
 */

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// The result I get when running the code is not an error message, but undefined.
// (320
// The result of multiplying 10 and 32 is undefined)

// correct version :
function multiply(a, b) {
  return a * b;
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
