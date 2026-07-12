// Predict and explain first...

// Why will an error occur when this program runs?
// The parameter is a constant which means the program will output the same thing everytime, 
//and would give an error message saying it has been declared if run.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

 return percentage;

 console.log(decimalNumber);
}
// =============> Our parameter has already been declared which is why the program is resulting in an error

// Finally, correct the code to fix the problem
//function convertToPercentage(decimalNumber) {
  //return `${decimalNumber * 100}%`;
   
//}
//console.log(convertToPercentage(0.5));