// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// this code will return a syntax error.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here

/*decimalNumber has already been defined in the function parameter so there is no need to declare it again, you can reassign its value.
and we don't log the variable inside a function outside the function, 
any variable declared inside a function is not available outside its function as it is a local scope*/

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage());
