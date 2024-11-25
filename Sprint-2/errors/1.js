// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.02));


// Here we will get syntax error due to value redeclaration for "decimalNumber" variable. it happens because we declare "decimalNumber" in the function parameter, and we are not allowed to redeclare it in the function body.
// To solve the error we need to remove the "const decimalNumber = 0.5;" from the function body, and set the value for it while calling the function.

// later on the last line we try to print the result but the point is we haven't called the function, we called "decimalNumber" instead. so we need to call the function, while defining value of "decimalNumber" as argument.