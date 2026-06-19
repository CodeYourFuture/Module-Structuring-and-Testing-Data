// Predict and explain :
// The function will return undefined.
// Therefore, the output will be:
// "The sum of 10 and 32 is undefined"

//----------------------------------------------------------------------------------------------------------

// Original code :
/*function sum(a, b) {
  return;
  a + b;
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);*/

//----------------------------------------------------------------------------------------------------------

// My explanation :
// The return statement ends the function immediately.
// Because return is on its own line, the expression a + b is never executed.
// As a result, the function returns undefined.

//----------------------------------------------------------------------------------------------------------

//new code :
function sum(a, b) {
  return a + b;
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
