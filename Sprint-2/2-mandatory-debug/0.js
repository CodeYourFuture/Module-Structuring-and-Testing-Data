// My prediction :
// The function will print 320.
// Then the second console.log will print:
// "The result of multiplying 10 and 32 is undefined"
// because multiply() does not return a value.

//----------------------------------------------------------------------------------------------------------

// Original code :
/*function multiply(a, b) {
  console.log(a * b);
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);*/

//----------------------------------------------------------------------------------------------------------

// my explanation :
// multiply() uses console.log() to display the result, but it does not return it.
// Functions that do not return a value return undefined by default.
// Therefore, multiply(10, 32) evaluates to undefined in the template string.

//----------------------------------------------------------------------------------------------------------

//new code :
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
