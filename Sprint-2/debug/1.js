// Predict and explain first...

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// The code will output undefined due to placing return on line 4 before the expression on line 5. The return statement stops the execution of a function and returns a value and any expression below return will not execute
