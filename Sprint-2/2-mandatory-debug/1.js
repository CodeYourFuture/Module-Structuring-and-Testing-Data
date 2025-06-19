// Predict and explain first...
//  =============> write your prediction here
the return statement is not defined 
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
when you write return; and then go to a new line, it immediately ends the function and ignores everything after it

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;

}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);