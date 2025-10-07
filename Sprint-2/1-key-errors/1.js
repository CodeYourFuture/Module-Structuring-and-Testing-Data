// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here. My prediction: Value decimalNumber is a  parameter to the convertToPercentage. We don't need to declare it at line 10. 
// =============> Also at line 16, we have to call function coverToPercentage with an argument. 

// Try playing computer with the example to work out what is going on

/*function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
*/
// =============> write your explanation here. My explanation: We need to modify this function. I'm going to remove line where decimalNumber is declared and execute the function properly.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.1));
