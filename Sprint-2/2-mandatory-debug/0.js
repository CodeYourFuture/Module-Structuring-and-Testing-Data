// Predict and explain first...

// console.log is being used inside the multiply function, which does not return any value.
// This will result in undefined being printed in the template literal.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// Output in the terminal was: "320
// The result of multiplying 10 and 32 is undefined"
// Console.log within the function prints the product of the calculation, but the function does not return the value to the global scope.
// Therefore within the template literal, the meaning of the multiply function call is undefined

// Finally, correct the code to fix the problem

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
