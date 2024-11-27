// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on


// Function to convert decimal to percentage
function convertToPercentage(decimalNumber) {
  // const decimalNumber = 0.5;
  // Removed the redeclaration of decimalNumber and just use the parameter
  const percentage = `${decimalNumber * 100}%`;  // Convert the decimal to percentage
  
  return percentage;
}

// Now we pass a decimal number as an argument to the function
console.log(convertToPercentage(0.5));  // Expected Output: "50%"

