// Predict and explain first...

// =============> Code is attempting to multiple a & b but there is no return value

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> because there is no return value, the outcome stays as undefined while giving the answer
// to fix this, change "console.log" in the second row to "return"
//

// Finally, correct the code to fix the problem
function multiply(a, b) {
  return (a * b);
}
