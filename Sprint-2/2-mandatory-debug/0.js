// Predict and explain first...

// =============> write your prediction here
// Firstly, it will print 320. Then print: The result of multiplying 10 and 32 is undefined.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// Inside function run the console.log(a * b) is executed, but this function doesn't return anything.

// When using ${multiply(10, 32)}, the function runs and prints 320, but since there’s no return, the value is undefined.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return (a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
