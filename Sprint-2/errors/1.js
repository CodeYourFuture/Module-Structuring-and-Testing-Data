// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(9.6));

/*
Syntax error because decimalNumber is redecalred, and the second one is accessing the decimalNuber out of the scope while logging.
*/
