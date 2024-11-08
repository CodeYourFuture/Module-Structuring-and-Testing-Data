// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

1//Error1: Identifier 'decimalNumber' has already been declared.
//The function convertToPercentage takes a parameter called decimalNumber.
//Inside the function, there is another declaration: const decimalNumber = 0.5;.
//Error2: Global Scope Issue with console.log(decimalNumber);(function is convertToPercentage)
//Fixed code:
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5)); 
