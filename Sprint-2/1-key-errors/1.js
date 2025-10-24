// Predict and explain first...

// Why will an error occur when this program runs?

// =============> I think, the function convertToPercentage is not called at line 16, and 
// there is no any importance of declaring cons decimalNumber as it is already declared.

// Try playing computer with the example to work out what is going on

//function convertToPercentage(decimalNumber) {
//  const decimalNumber = 0.5;
//  const percentage = `${decimalNumber * 100}%`;

//  return percentage;
//}

//console.log(decimalNumber);

// =============> A syntaxError appeared indicating 'decimalNumber' has already been declared. 

// Finally, correct the code to fix the problem
// =============> write your new code here


function convertToPercentage() {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage());

// The new code run smoothly and retuned "50%"