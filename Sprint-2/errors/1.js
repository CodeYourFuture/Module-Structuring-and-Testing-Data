// Predict and explain first...

//displays undefined as the convertToPercentage function isn't called

// Why will an error occur when this program runs?
// Its because decimalNumber has already been declared and cannot be defined again in the same scope

// Try playing computer with the example to work out what is going on


function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
