// Predict and explain first...

// =============> write your prediction here: There is no return value value for the function multiply. Though it print the value of a * b in the function, this function cannot be called outside of the function (on line 9). So, it will be undefinded. WE need a return

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here: We need to change console.log on line 6 to return so that we can call in outside of the function.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
