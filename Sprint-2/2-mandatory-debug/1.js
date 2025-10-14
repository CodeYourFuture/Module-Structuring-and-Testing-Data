// Predict and explain first...
//  =============> write your prediction here
// the console will show The sum of 10 and 32 is undefined, this is because the return command is before the calculation so the return has no value to bring back.

//function sum(a, b) {
//  return;
//  a + b;
//}

//console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
//the console will show The sum of 10 and 32 is undefined, this is because the return command is before the calculation so the return has no value to bring back.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
