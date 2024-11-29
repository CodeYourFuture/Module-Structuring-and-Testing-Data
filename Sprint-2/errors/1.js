// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

/* An error will occur when this program runs because decimalNumber has been declared 
but then declared again within the function. By moving the const decimalNumber = 0.5% out of the 
function, it would solve for that error.
The next error is that console log is not calling the function correctly, it must state 
the full name of convertToPercentage(decimalNumber) to return the correct value. */