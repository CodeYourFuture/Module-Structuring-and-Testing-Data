// Predict and explain first...

// The result of a * b will be printed to the console
// Since the function does not return any value, it will return undefined

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// Because the function is evaluated before the string is printed to the console, it will log the result of a * b to the console first, but because it does not return a value, the next console.log of the string will print 'The result of multiplying 10 and 32 is undefined'

// Finally, correct the code to fix the problem
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
