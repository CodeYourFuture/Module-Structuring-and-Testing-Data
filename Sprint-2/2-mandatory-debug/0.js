// Predict and explain first...

// =============> write your prediction here
// The function won’t return a value because 'console.log' is being used instead of 'return' so only part of the output will appear as expected.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The string expression ${multiply(10, 32)} tries to insert the return value of the multiply function.
// However, the multiply function uses 'console.log()' instead of 'return', so it just prints 320 on its own,
// before the full sentence is shown. The '${ }' expression expects a value, so it shows 'undefined' if the function doesn't return anything.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
