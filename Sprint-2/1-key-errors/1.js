// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

  // The first error that will occur will be for the variable decimalNumber being declared as a constant.
  // The variable decimalNumber is already declared as the argument for the function.
  
  // The second error is that console.log() will not have access to variable inside of the function.
  // The variable is out of scope for console.log().

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
  // Line 14: The function convertToPercentage is declared with an argument called decimalNumber.

  // Line 15: A constant named decimalNumber is declared with the value of 0.5.

  // Line 16: A constant named percentage is declared with the value of `${decimalNumber * 100}%`.
  //          The value is shown as a template literal which takes the variable decimalNumber and multiplies it by 100.

  // Line 18: The function then returns the value of the variable percentage.

  // Line 21: The variable decimalNumber is logged to the console. As the variable is created inside the function, 
  //          at this time, we will not be able to access the variable.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  
  return percentage;
}

const decimalNumberSample = 0.5;

console.log(convertToPercentage(decimalNumberSample));