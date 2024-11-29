// Predict and explain first...
// 〰️ This program will have errors when it runs.

// Why will an error occur when this program runs?
// 〰️ Inside the convertToPercentage function, the parameter decimalNumber is declared again using const, which isn’t allowed since decimalNumber is already being used as a parameter. This will cause a syntax error.
// 〰️ The console.log(decimalNumber); line at the end will also cause an error because decimalNumber is not available outside the function; it only exists within the function itself. So JavaScript will throw a reference error here.

// Try playing computer with the example to work out what is going on
// 〰️ To fix these issues:
// 〰️ We will remove the redeclaration of decimalNumber inside the function. And use the parameter decimalNumber directly instead.
// 〰️ To use console.log to see the result, change the call to console.log(convertToPercentage(0.3));, passing a value to the function.

function convertToPercentage(decimalNumber) {

  const percentage = `${decimalNumber * 100}%`;
  
  return percentage;
}

console.log(convertToPercentage(0.5)); // 〰️ Outputs "50%"
