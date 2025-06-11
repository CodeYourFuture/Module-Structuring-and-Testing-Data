// Predict and explain first...
//  There is Error. The result will be undefined.

//function sum(a, b) {
//  return;
//  a + b;
//}

//console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// Semicolon is coming after return statement. LogicalError

// Finally, correct the code to fix the problem
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
