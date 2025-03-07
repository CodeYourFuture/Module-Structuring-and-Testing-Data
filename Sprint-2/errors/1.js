// Predict and explain first...

//A function convertToPercentage is created which takes a decimal number. We then create variable but there will be a problem as it uses the same variable name as the function parameter.
//Therefore, we can remove that line  as the function parameter will provide the decimal number. Then, we create a variable called percentage which takes parameter, multiplies it by 100, and adds % sign to convert the decimal number to percentage.
//Finally, console.log needs to call the function name with a given parameter for it to work, rather than calling the variable name.

// Why will an error occur when this program runs?
//There will be a syntax error because we are creating a variable inside a function with the same name as the function parameter.

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(50));
