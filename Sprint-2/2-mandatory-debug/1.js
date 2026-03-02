// Predict and explain first...
//  =============> the function so will not perform a + b and will return undefined in the 
 console.log function

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> there shouldn't be a semi-colon after return
// this will signify the end of function so a + b will not be performed
// therefore there is no answer to return to print in the console.log function

// Finally, correct the code to fix the problem
//  =============> 
// function sum(a, b) {
//   return a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
