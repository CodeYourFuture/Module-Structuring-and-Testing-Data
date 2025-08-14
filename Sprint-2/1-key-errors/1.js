// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// I expect a Syntax error to be thrown due to the const "decimalNumber" has already been declaired in the parameters of the function.
// I also expect an error from the "console.log(decimalnumber)" as its calling "decimalNumber" from outside the function

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
// When running the code i get thrown a Syntax error: "identifer 'decimalNumber' has already been declared". To solve this you must remove the "const decimalNumber = 0.5" from the function as its already been defined in the parameters of the function.
// after testing the code and fixing the syntax error we then recived another error: "ReferenceError: decimalNumber is not defined" To solve this you must change the "console.log(decimalNumber)" to "console.log(convertToPercentage())".

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5)); // equals to 50%
