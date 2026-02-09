// Predict and explain first...

// =============> In line 6, the word return is missing, I assume.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> $`{multiply(10, 32)}` is undefined.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(multiply(10, 32));
