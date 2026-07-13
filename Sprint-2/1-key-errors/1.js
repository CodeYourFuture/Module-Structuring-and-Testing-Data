// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// Try playing computer with the example to work out what is going on

// =============> write your explanation here
// Since the parameter and variable have the same name, decimalNumber, we will get an error as we can not declare a
// variable of the same name with in the functions local scope. In addition to that setting decimalNumber to 0.5 means
// the function will always return 50% no matter what number is passed into it.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
