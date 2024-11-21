// Predict and explain first...
// the function will not run because the return statement end as soon as the code reach to it but the console.log will run
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
