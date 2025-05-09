// Predict and explain first...
// We will get undefined message for line 5 and error message for line 6.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// he return statement is not returning the sum of a and b, 
//it is returning undefined. The code will not run the sum function 
//and will return undefined. The expression should be in the same line of return statement.

// Finally, correct the code to fix the problem

function sum(a, b) {
  return a + b;
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);