// Predict and explain first...

// =============> will show undefined because the function does not return a value

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> the function only uses console.log() so it prints the result but does not return it when a function has no return, JavaScript returns undefined,which is why undefined appears in the final sentence

// Finally, correct the code to fix the problem
//  =============>
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
