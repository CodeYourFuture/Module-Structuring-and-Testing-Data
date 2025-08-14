// Predict and explain first...

// =============> Answer 💡: does not have a return statement, so it will return undefined

/*function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`); */

// =============> write your explanation here: The code shows the message
// "320 The result of multiplying 10 and 32 is undefined"
// It is because the multiply function does not return a value, it only logs the result to the console.

// Finally, correct the code to fix the problem
//  =============>

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`); // logs "The result of multiplying 10 and 32 is 320"
