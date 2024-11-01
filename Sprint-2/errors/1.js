// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

/* function convertToPercentage(decimalNumber) {
   decimalNumber = 0.5; //remove this!
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber); //it must become console.log(convertToPercentage(0.25)); */
//correct version is written down:

function convertToPercentage(decimalNumber) {

 const percentage = `${decimalNumber * 100}%`;

 return percentage;
}

console.log(convertToPercentage(0.8));