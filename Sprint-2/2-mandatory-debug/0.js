// Predict and explain first...

/*
I predict that the output of this function will not return the expected result because the function multiply is defined to log the result of multiplying two numbers, it does not RETURN any value for a method to use.
When a console.log statement outside a function attempts to log a console.log statement from within a function, it will not return a numerical value. Instead, it will likely return undefined.
*/

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

/*
Because console.log is a console object with a log() method (or a 'print' method), it is not the same as a return statement.
Inside the multiply function body, we are effectively printing the result of the inputs for a multiplied by b, we are NOT STORING the evaluated value anywhere. In this instance by evaluating the inputs of 10 and 32 we will first see 320 logged to the console.
Then the console.log statement outside the function will attempt to log the result of the multiply function call - here, we would expect 320 - however, the printed value of 320 was not stored to a variable or returned from the function, so when the second console.log statement runs, it will not find a value to log, and instead will log 'undefined'.
*/

// Finally, correct the code to fix the problem
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
