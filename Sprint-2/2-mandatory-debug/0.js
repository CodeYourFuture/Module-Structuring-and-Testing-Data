// Predict and explain first... it log 310.
      // The result of multiplying 10 and 32 is undefined


// =============> function dese not return any thing it just log 

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> The `multiply` function uses `console.log` to print the result but doesn't return it.
// When `multiply(10, 32)` is called inside the template string, 
// it runs the function (which logs `320`), but since it doesn't return anything, 
// it inserts `undefined` into the string.


// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
return `The result of multiplying ${a} and ${b} is ${a * b}`
}

console.log(multiply(9, 6)); // ===> The result of multiplying 9 and 6 is 54