// Predict and explain first...

// =============> write your prediction here
// The function multiply(a, b) logs the result within the function but does not return anything.

function multiply(a, b) {
  console.log(a * b);
}

//console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// Console.log() will print something.
// Return gives a value back to the caller - the function currently will print the result but does not return it. 

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
