// Predict and explain first...

//The output  is 320
//no define the reult of multiplying 10 and 32
// This is because the multiply function uses console.log() instead of return.
// The function will print 320 to the console, but then will show 
// "undefined" because the function doesn't return a value.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here

//The multiply() function calculates a * b (which is 320) and prints it
// using console.log(). 
//console.log() doesn't return a value  just output of console
// it only displays output to the console.
//
// there is no return statement, it  returns 'undefined'. 
// the function:
// 1. Prints "320" to the console
// 2. Returns undefined
//    "The result of multiplying 10 and 32 is undefined"

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;        // use return not console 
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);