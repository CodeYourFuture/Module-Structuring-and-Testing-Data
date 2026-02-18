// Predict and explain first...
//  =============> write your prediction here
// We will get either an undefined or an error, because a + b is not on the same line as return

// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here

// return marks the end of a function, telling the computer to exit and go back to the global scope. Because the operation a + b is not on the same line as return, the computer won't be able to read it, so the function is returning nothing.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
