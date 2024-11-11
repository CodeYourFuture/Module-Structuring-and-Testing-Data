// Predict and explain first...
//Amswer: the decimalNumber is hardcoded which means the function will not be reusable for different values. second problem is the scope that variable id defined. in this case we would not have access to decimalNumber outside of its function
// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(.5));
