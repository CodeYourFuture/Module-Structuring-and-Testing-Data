// Predict and explain first...

// =============> The funtion does not return a value, so when we try to log the result of the function call,
// it will return undefined and log "The result of multiplying 10 and 32 is undefined" to the console.

//function multiply(a, b) {
//  console.log(a * b);
//}

//console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> 320 The result of multiplying 10 and 32 is undefined

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
