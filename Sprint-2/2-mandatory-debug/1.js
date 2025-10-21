// Predict and explain first...
//  a + b should be written on the same line as return statement
// This function will not return anything because of the semicolon, so when the function is call on line 10 it will be undefined.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// Terminal output "The sum of 10 and 32 is undefined"
// Console.log is calling a function that was not defined because the function body has an incorrect return statement.

// Finally, correct the code to fix the problem
function sum(a, b) {
return a + b;
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
