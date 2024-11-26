// Predict and explain first...

function multiply(a, b) {
  return (a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

/*line 4 is using console.log to get a result but does not return any value
Therefore, '${multiply(10, 32)}`);'will shown as undefined. */