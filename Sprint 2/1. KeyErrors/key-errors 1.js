// This function converts a decimal number to a percentage string.
// For example, 0.5 will be converted to "50%".

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5)); // Outputs: "50%"