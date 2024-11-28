// Predict and explain first...

// My prediction:
// This function logs out the result of multiplying a and b to the console.
// When invoked it will log out the result of multiplying 10 and 32: 320
// BUT it has no return statement, so it will RETURN undefined.
// So when the function is called in the log statement, it will not return anything, the console.log statements will read:
// 320
// "The result of multiplying 10 and 32 is undefined"

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// Actual:
// I was correct in my prediction.

// When I ran this code in node REPL, the output was:
// 320
// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
// When I executed this file in VSCode  -> % node 0.js, the output was the same:
// 320 <== executed from the function multiply when I executed the script file
// The result of multiplying 10 and 32 is undefined
