// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// the problem is where the variable is declared and used again, will change it. and also the print statement is outside the functions block and the variable cant be used there.

function convertToPercentage(decimalNumber){
  decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;
  console.log(decimalNumber); //now it will print correctly
  return percentage;
}

convertToPercentage(0.67);