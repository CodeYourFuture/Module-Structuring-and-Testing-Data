// Predict and explain first...

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// the multiply function only logs the value of a * b but doesn't return the value, therefore the last console log will print "The result of multiplying 10 and 32 is undefined"
// changed console.log(a * b); to return a * b;