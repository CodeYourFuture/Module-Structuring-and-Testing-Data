// Predict and explain first...

// =============> write your prediction here
// Answer
// If this program runs, I predict that the function will return undefined because no return statement is defined inside the function. 
// Also, the console.log inside the multiply function will print its output to the terminal.
// Lastly, because the function returns undefined, when ${multiply(10, 32)} is used inside a template literal inside the console.log function, it will print undefined in that position.

//function multiply(a, b) {
  //console.log(a * b);
//}

//console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  console.log(a * b);
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);