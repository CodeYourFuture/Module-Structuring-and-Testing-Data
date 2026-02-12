// Predict and explain first...

// Why will an error occur when this program runs?
// =============> An error will occur because console.log(decimalNumber) tries to access a variable that does not exist in the global scope.

// Try playing computer with the example to work out what is going on



// =============> decimalNumber is already a parameter, and JavaScript does not allow redeclaring a parameter woth const.

// Finally, correct the code to fix the problem
// =============>
 function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));
