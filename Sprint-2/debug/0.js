// Predict and explain first...

function multiply(a, b) {
  return (a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);


// Here we defined function to just print the result not return it, therefore it returns undefined in Javascript by default.
// to get proper output we need to use "return a * b" instead of "console.log(a * b)" in function body.
// It returns the result, but its because of console.log() in function body when it calls function in last line, but in the string we meant to get the result, we get undefined result.