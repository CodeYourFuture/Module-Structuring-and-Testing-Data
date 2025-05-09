// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
//The program will throw a SyntaxError due to the redeclaration of decimalNumber inside the function. Additionally, it will throw a ReferenceError when trying to log decimalNumber outside the function because decimalNumber is not defined in the global scope.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
//Removed the redeclaration of decimalNumber inside the function. Ensured decimalNumber is passed as an argument to the function. Removed the incorrect console.log(decimalNumber); statement, since decimalNumber does not exist in the global scope.

// Finally, correct the code to fix the problem
// =============> write your new code here
//function convertToPercentage(decimalNumber) {
 // const percentage = `${decimalNumber * 100}%`;
 // return percentage;
//}

//console.log(convertToPercentage(0.5));

