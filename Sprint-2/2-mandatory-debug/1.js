// Predict and explain first...
//  =============> write your prediction here
// The sum function is doing nothing because a + b is not with return 
function sum(a, b) {
  return;
  a + b;
}

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// a and  b were not as a value for sum because they weren't in  return, they were unreadable because the are after return    
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
