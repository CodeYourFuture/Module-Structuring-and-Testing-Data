// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// I predict this function is trying to convert a decimal number
// into a percentage. It multiples the decimal number by 100 and
// then it adds the %  symbol to the end of the number.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// The error happens becouse 'decimalNumber' is already the parameter
// of the function. Inside the function the code tries to declare 'decimalNumber'
// again using the const, which is not allowed.

// a other problem is that console.log(decimalNumber) is outside
// the function but 'decimalNumber' only exists inside the function.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));
