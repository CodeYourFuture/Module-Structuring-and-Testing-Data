// Predict and explain first...

// =============> The program will throw an error when it runs. Specifically, it will result in a SyntaxError or ReferenceError

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> The error happens because the function multiply(a, b) doesn't return a value, so the console.log() statement is trying to print undefined to the console. This is because the function doesn't have a return statement, so it returns undefined by default.

// Finally, correct the code to fix the problem
//  =============> 
// CORRECTED CODE BELOW
function multiply(a, b) {
return a * b; 
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);


