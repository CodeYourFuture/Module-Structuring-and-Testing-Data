// Predict and explain first...
// The function suppose to multiply two numbers. The execution of the function includes a console.log call instead of a return.
// =============> write your prediction here
// The console is going to present two different messages. No one with the expected result.
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The console shows the result of the multiplication 10 x 32 = 320, and the text message with the result Undefined.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a,b){
  return a * b ;
}
console.log(`The result of multiplying 10 ad 32 is ${multiply(10,32)}`);