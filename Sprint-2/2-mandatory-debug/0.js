// Predict and explain first...

// =============> the function is not returning anything, it just logs to the console.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here:
// 320
// The result of multiplying 10 and 32 is undefined
// it prints the result of 10*32 since we called the function in our last console log, then it prints the sentence, but the sentence would include the return value of the function, but that is undefined, as the function did not return any value.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
