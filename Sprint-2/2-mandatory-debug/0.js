// Predict and explain first...

// =============> Error because console.log is within the multiply function does not return a value 

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> The console.log inside the function multiply is read first & prints the result of multiplying 10 and 32 - 320, to the console.  
// But the aim of the function which was tryin to return it in the template literals is left as undefined because the multiply function does not return a value
//   

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}