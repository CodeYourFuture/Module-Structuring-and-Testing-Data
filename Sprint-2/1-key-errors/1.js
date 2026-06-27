// Predict and explain first...
// Why will an error occur when this program runs?
// =============> The error will appear because we are trying to log the variable decimalNumber in the function. We have to call the function at this point. Besides to that, the decimalNumber is again declared inside the function where it shouldn't be.


// Try playing computer with the example to work out what is going on


function convertToPercentage(decimalNumber) {
  return `${decimalNumber * 100}%`;
}

console.log(convertToPercentage(0.1));


console.log(decimalNumber);
// =============> it says decimalNumber has aleady been declared for the above reason.


// Finally, correct the code to fix the problem
/* ===========> function convertToPercentage(decimalNumber) {
  let decimalNum = 0.5;
  const percentage = `${decimalNum * 100}%`;


  return percentage;
}
const result = convertToPercentage();
console.log(result);
*/


