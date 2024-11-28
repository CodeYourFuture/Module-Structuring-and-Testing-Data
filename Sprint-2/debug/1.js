// Predict and explain first...

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// the return statement doesn't return anything and will print The sum of 10 and 32 is undefined instead
// return exits the function and therefore a + b; is ignored.
// fixed 