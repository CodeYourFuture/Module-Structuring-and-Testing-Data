// Predict and explain first...
// At the first glance, I believe the function would occur errors because the variable decimalNumber is declared twice.
// Besides, console.log is trying to log a variable that is not defined in global scope.

// Why will an error occur when this program runs?
// =============> write your prediction here
// The first error should be a syntax error that "decimalNumber" has already been declared.
// Since decimalNumber is declared as a parameter of the function,
// when a new variable also named decimalNumber is declared inside the function,
// it causes a conflict.

// The second error should be a reference error that "decimalNumber is not defined".

// Try playing computer with the example to work out what is going on
/*
function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
*/

// =============> write your explanation here
// After running the code, I got a syntax error that "decimalNumber" has already been declared.
// I also found out that the decimalNumber inside the function should be declared again.
// Besides, if we want to log the result of the function, we should call the function with an argument inside console.log().

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
console.log(convertToPercentage(0.5)); // should return "50%"
console.log(convertToPercentage(0.75)); // should return "75%"
