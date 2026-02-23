// Predict and explain first...
//  =============> return statement is on a new line, therefore there will be an error. 

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> return statement should be on the same line. 
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b){
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);