// Predict and explain first...

// Why will an error occur when this program runs?
// =============> Has the same problem again, decimalNumber is passed in and then code attempts to declare it

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) { // ====> function called with decimalNumber, so this variable is already present in the function scope
//   const decimalNumber = 0.5; // ===> attempting to declare decimalNumber again
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber); // ====> presumably we want to be logging the returned percentage value 

// =============> write your explanation here
//  SyntaxError: Identifier 'decimalNumber' has already been declared

// Finally, correct the code to fix the problem
// =============>

function convertToPercentage(decimalNumber) { 
  return `${decimalNumber * 100}%`;
}

percentage = convertToPercentage(0.38);

console.log(percentage);
