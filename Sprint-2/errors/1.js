// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// This code will cause a syntax error as it declares decimalNumber two times in the same scope.
// decimalNumber is declared in line 7 as constant variable, however it been already declared as a parameter 
// To fix this, we can remove the line const decimalNumber = 0.5; and use the value of the parameter that
// passed to the function.
// Also, in line 13 the code logs the value of decimalNumber which will throw Reference error as decimalNumber
//is not a global variable and cannot be use outside the scope of convertToPercentage.

//Here is how to fix this code

/*function convertToPercentage(decimalNumber) {
  //const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5)); */