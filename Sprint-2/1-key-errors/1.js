// Predict and explain first...

// Why will an error occur when this program runs?
// =============> Decimal number is undefined because we did not call the function 
//                also if we call the function and passing parameter to the 
//                'decimalNumber' we will got syntaxerror as we are declaring a new variable 
//                'decimalNumber' with the same name as the function parameter,
//                which is not allowed in JavaScrip.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// We got SyntaxError: Identifier 'decimalNumber' has already been declared.
// Because we declared a new variable 
// 'decimalNumber' with the same name as the function parameter,
// which is not allowed in JavaScrip.

// Finally, correct the code to fix the problem
// =============> 
              //   function convertToPercentage(decimalNumber) {
              
              //   const percentage = `${decimalNumber * 100}%`;

              //   return percentage;
              // }

              // result = console.log(convertToPercentage(0.5));
