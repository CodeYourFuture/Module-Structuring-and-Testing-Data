// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.6));

// gives error tah decimalNumber has already been declared
// we have to call the function instead of decimalNumber - the we give a value to function for decimalNumber
// and we have to remove the line => "const decimalNumber = 0.5;" because
// if we don't remove it , the function always works on 0.5 and result always will be 50%