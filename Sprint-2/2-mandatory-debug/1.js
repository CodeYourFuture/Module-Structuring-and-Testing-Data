// Predict and explain first...
// This code will run without throwing a crash error, but it will print an incorrect result. 
// The output will be:This code will run without throwing a crash error, but it will print an incorrect result. 
// The output will be: The sum of 10 and 32 is undefined

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> the explanation:
// The function sum has a return statement before the addition operation, which causes the function to return undefined immediately. 
// To fix this, the return statement should be placed after the addition operation.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}
console.log(sum(10, 32));
