// Predict and explain first...

// =============> write your prediction here
// 320

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here

/*Explanation: The `multiply` function calculates `a * b` and immediately prints it to 
  the console, but it doesn't use the `return` keyword to hand the value back.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);