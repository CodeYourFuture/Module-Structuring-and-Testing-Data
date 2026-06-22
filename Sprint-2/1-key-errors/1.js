// Predict and explain first...
// Why will an error occur when this program runs?
// =============> The error will appear because we are trying to log the variable decimalNumber in the function. We have to call the function at this point. Besides to that, the decimalNumber is again declared inside the function where it shouldn't be.


// Try playing computer with the example to work out what is going on


function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;


  return percentage;
}


console.log(decimalNumber);

