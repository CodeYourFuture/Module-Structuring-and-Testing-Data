// Predict and explain first...
// A function convertToPercentage is created which takes a decimalNumber. We then create two variable but there will be a problem as it uses the same variable name as the function parameter.
// We also dont need to redeclare the function, as the information will be provided by the user and thus it can be removed. Then, we create a variable called percentage which takes parameter, multiplies it by 100, and adds % sign to convert  the decimal number to percentage.
//Finally, console.log needs to call the function name with a given parameter for it to work, rather than calling the variable name.
// Why will an error occur when this program runs?

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(50));
