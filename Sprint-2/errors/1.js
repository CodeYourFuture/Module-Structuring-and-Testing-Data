// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage() {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage());


/*This will occur error because it is re-defining the decimalNumber variable inside the function, 
but decimalNumber has already been used as a parameter.

I should use delete 'decimalNumber in line 6, and change line 13 to console.log(convertToPercentage);*/