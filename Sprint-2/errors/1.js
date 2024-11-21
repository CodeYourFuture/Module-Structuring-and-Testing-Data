// Predict and explain first...
/*
Parameter:
decimalNumber: This is the input decimal number that the function will process.
Percentage Calculation:

decimalNumber * 100: Multiplies the decimal number by 100 to convert it to a percentage value.
${...}%: Uses a template literal to create a string representation of the percentage, appending the '%' symbol.

Return Value: The formatted percentage string is returned by the function.

The convertToPercentage function is intended to convert a decimal number to a percentage string.
The function directly assigns the value 0.5 to the decimalNumber variable, overriding any input that might be passed to it. 
*/

// Why will an error occur when this program runs?
// = The error arises due to redeclaration of the decimalNumber variable within the function scope
// = decimalNumber is declared using the const keyword
// = console.log(decimalNumber) statement, this is trying to access the decimalNumber variable, which is only defined within the convertToPercentage function

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
