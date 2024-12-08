// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

// SyntaxError because of the re-declaration of the variable decimalNumber inside the convertToPercentage function.
// remove decimal variable declare in side the function "same scope"
// 

function convertToPercentage(decimalNumber) {
  // const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

//console.log(decimalNumber); // this will throw error because console outside of the function.
console.log(convertToPercentage(0.40))