// Predict and explain first...

// I predict that the output will be:
// 320
// The result of multiplying 10 and 32 is undefined



function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// My explanation; The issue is that:

// The multiply function uses console.log(a * b) which prints 320 to the console
// But the function doesn't return any value, so it implicitly returns undefined
// When we try to interpolate ${multiply(10, 32)} in the template literal, it becomes undefined
// So we get the unexpected output showing "The result... is undefined"

// Finally, correct the code to fix the problem
// My new code:

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// Now the output will be:
// The result of multiplying 10 and 32 is 320

// The fix:

// I Changed console.log(a * b) to return a * b so the function actually returns the result
// The template literal can now properly display the calculated value