// Predict and explain first...

// =============> write your prediction here
// This answer is similar to the description below.  
// - Would expect to print:
// - The result of multiplying 10 and 32 is 320
// - But based on how the function is written, here's what will actually happen:
// - The result of multiplying 10 and 32 is undefined


function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// - The code is trying to multiply the values 10 and 32 and display the result inside a sentence:
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
// -  However, the function multiply(a, b) only logs the result using
// -  console.log(a * b) — it doesn't return the value.

// -  Since there’s no return statement, the function returns undefined by default. 
// -  As a result, the template string ends up displaying:
// -  The result of multiplying 10 and 32 is undefined
// -  Even though the actual product (320) is printed on a separate line, 
// -  it’s not included in the sentence.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`); // Output: 320