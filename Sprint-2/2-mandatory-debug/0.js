// Predict and explain first...

// =============> write your prediction here
// The function multiplies the numbers and prints the answer.

// But it does not return the answer.

// Because there is no return, the function automatically gives back undefined.

// So when we use the function inside the second console.log, the value is undefined.

function multiply(a, b) {
  console.log(a * b);

}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// console.log and return are not the same.

// console.log only prints the value to the console.

// It does not send the value back to the function call.

// Because there was no return statement, the function automatically returned undefined.

// To fix the issue, I replaced console.log with return.

// By returning a * b, the function now sends the calculated value back to where it was called.

// As a result, the correct value is displayed instead of undefined.
//  =============> write your new code here
function multiply(a, b) {
  return a * b;

}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
