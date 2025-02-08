// Predict and explain first...
//  =============> write your prediction here
//the code will run an error as the return statement is above the actual calculation
function sum(a, b) {
  return;
   a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
//The code ran The sum on 10 and 32 is undefined as the return statement is above the actual calculation
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
