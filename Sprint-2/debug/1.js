// Predict and explain first...

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
//the return statement is encountered before the a + b expression.
//In JavaScript, if the return statement is called with no value, the function implicitly returns undefined.
//The output template literal is trying to log the result of sum(10, 32).
//Since sum(10, 32) returns undefined, the log will output undefined as the result.
//if we want function return sum we should change to :

function sum(a, b) {
  return a+b;
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);