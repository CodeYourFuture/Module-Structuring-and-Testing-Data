// Predict and explain first...

function multiply(a, b) {
   return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// The output will be undefined due to the fact that the value from the multiply() function hasn't been returned thus not saved. Also the value will not be reusable from using the console.log function to output the result. This option works mostly when debugging a program/code.
