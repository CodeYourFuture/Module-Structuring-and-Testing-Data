// Predict and explain first...

// =============> console.log will print the result because log()will write the message to the console.
//

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> When testing the code in Node.js, the output was  320 without the message because it was undefined "The result of multiplying 10 and 32 is undefined".
//we need to use return to store the result then print it out. 
// Finally, correct the code to fix the problem
//  =============> // Corrected Code:
function multiply(a, b) {
  return a * b; // Use 'return' instead of 'console.log'
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

