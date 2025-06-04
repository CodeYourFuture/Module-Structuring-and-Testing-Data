// Predict and explain first...

// =============> write your prediction here: this will evaluates to: 320 (first line) 
//`The result of multiplying 10 and 32 is undefined` (second line). This is simply because the
// function body doesn't contains return it has console.log instead which log a value 320 first. However, when the function
// is called in the template literal, since the body of it has no return, instead console.log, undefined it the expected value for 
// the ${multiply(10, 32)} part
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here: already explained above

// Finally, correct the code to fix the problem
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);