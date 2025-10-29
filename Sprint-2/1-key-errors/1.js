// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// This code is tend to be a code to convert decimal number in to %. I predict there will be an error because the call for the function has a bug.

// Try playing computer with the example to work out what is going on

const decimalNumber = 0.5;

function convertToPercentage(decimalNumber) {
  
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(decimalNumber));

// =============> write your explanation here
// A syntaxError has been observed because the decimalNumber is already declared.
// if we delete line 10 anther error happen this time about calling the function in which decimalNumber is not defined in the global scope.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage("0.5"));