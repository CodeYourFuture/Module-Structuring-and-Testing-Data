// Predict and explain first...

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

/* In the function, the return statement is closed with a ; with a + b written as a new statement, 
which outputs as undefined.
The fix is to have a one-line statement where the code is return a + b;
*/