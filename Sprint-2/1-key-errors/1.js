// Predict and explain first...

// Why will an error occur when this program runs?
// =============> I predict the error will occur as the declaration of variable 'decimalNumber' in line 9 will clash with the parameters input 'decimalNumber' to the function in line 8. 

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> In case, the function is called with a parameter '0.4', I think the decimal number will be used to calculate the percentage in line 10. So whatever decimal number is input to the function makes no difference. The return value would always be 50%.

// Finally, correct the code to fix the problem
// =============> function convertToPercentage(decimalNumber) {
// =============>   const percentage = `${decimalNumber * 100}%`;
// =============>   return percentage;
// =============> }
// =============> console.log(convertToPercentage(0.4));
