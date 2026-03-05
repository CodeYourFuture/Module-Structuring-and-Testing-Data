// Predict and explain first...

// Why will an error occur when this program runs?
// =============> decimalNumber is defined within the function so it will not be recognised in console.log(decimalNumber);

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============>  this is a function to convert a decimal number to a percentage - function declared
// the decimal number is declared as 0.5  
// percentage is calculated by multiplying the decimal // number by 100 and then adding the % symbol 
// the answer returned is named percentage and gives a // number followed by %
// the answer will be printed in console

// Finally, correct the code to fix the problem
// =============> // the error was actually 'decimalNumber' has already been declared
// this was because decimalNumber was declared inside the function convertToPercentage(decimalNumber)
// and declared again within the function with the const statement
// once const decimalNumber = 0.5; was moved outside the function this error was resolved
// that way the global decimalNumber exists and the function can still accept it as an argument


// const decimalNumber = 0.5;
// function convertToPercentage(decimalNumber) {
//   const percentage = `${decimalNumber * 100}%`;
//   return percentage;
// }
// console.log(decimalNumber);

