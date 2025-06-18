// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

//I think an error will occur when this program runs because the variable decimalNumber is declared in line 10 in the parameter of the function and on line 11 as a constant.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here

// The error is: Uncaught SyntaxError: Identifier 'decimalNumber' has already been declared. This means that we cannot declare a variable with the same name as a parameter inside the function. In this case, we don't need the declaration const as decimalNumber is already declared in the function's parameter.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
