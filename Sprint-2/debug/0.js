// Predict and explain first...

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

//multiply(10, 32) doesn't return anything  (it returns undefined by default in JavaScript).
//If we want multiply to return the product rather than log it to the console,
//we change multiply to use return instead of console.log:
