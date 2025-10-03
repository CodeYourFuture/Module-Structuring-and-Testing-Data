// Predict and explain first...
//  SyntaxError

// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// the function doesn't return anything because there is ";" immediately after "return" and the mathematicall operation is on another line
// Finally, correct the code to fix the problem
function sum(a, b) {
  return a + b;
  
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
