// Predict and explain first...

// Why will an error occur when this program runs?
// =============> There are two errors I notice here. The first is that, similarly to the first exercise, the variable decimalNumber is being declared twice - first as the parameter of the function and then again with const decimalNumber.
// JavaScript does not allow for a variable to be declared more than once.
// The second error is the console.log section where it attempts to access a variable inside the function which will not work. The function is what needs to be called.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(decimalNumber);

// =============> As the decimalNumber variable has already been declared within the function I removed the second const declaration as it is unnecessary.
// I changed the console.log section to call the function and not the variable. I then tested this and got the expected result.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.3));