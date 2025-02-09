// Predict and explain first...
//  =============> write your prediction here. Answer: We will get an error that say undefine

function sum(a, b) {
  return;
  a + b;
}

//console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here. Answer: The return value stops the execution early without a + b being executed
// Finally, correct the code to fix the problem
//  =============> write your new code here
//Answer: New code

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
