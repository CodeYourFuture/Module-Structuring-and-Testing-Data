// Predict and explain first...

// Why will an error occur when this program runs?
// The error occurs because the variable decimalNumber is declared twice in the function convertToPercentage. The first declaration is in the function parameter, and the second declaration is inside the function body. This causes a conflict because you cannot declare a variable with the same name in the same scope.
// =============> write your prediction here
// The command is to convert a decimal number to a percentage.

// Try playing computer with the example to work out what is going on
//

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// The function convertToPercentage takes a decimal number as input and attempts to convert it to a percentage. However, the variable decimalNumber is declared twice, which causes a SyntaxError. To fix this, we can remove the second declaration of decimalNumber inside the function body and directly return the calculated percentage.

// Finally, correct the code to fix the problem
// =============> write your new code here
// The corrected function should look like this:

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

// Now the function should work correctly and convert a decimal number to a percentage.
