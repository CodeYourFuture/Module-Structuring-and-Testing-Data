// Predict and explain first...

// Why will an error occur when this program runs?
// =============> I can see that the variable decimalNumber is being declared twice once as a  function parameter and again as a constant 

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> so the function is to convert a decimal number into a percentage
// so if the number is 0.5 it is multiplied by 100
//  % sign is added at the end to make it 50%

// Finally, correct the code to fix the problem
// =============> the problem can be fixed by removing the redeclaration of the variable decimalNumber inside the function
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

// Call the function and store the result in a variable
const result = convertToPercentage(0.5);
console.log(result); 

