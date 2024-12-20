// Predict and explain first...
//* When we execute this code, it calls the multiply function , we will have the log of the function by console.log inside of the
// function >(320). However because the function doesn't have return statement so the value in the template literal will be undefined.


//* To fix this we can put return statement and return the value to the template literal.

function multiply(a, b) {
  return (a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
