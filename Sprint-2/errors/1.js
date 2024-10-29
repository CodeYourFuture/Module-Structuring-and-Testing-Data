// Predict and explain first...
  //decimalNumber is a parameter in the convertToPercentage function and it is declared again by const keyword.

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on
   //SyntaxError: Identifier 'decimalNumber' has already been declared: decimalNumber is declared as parameter in the function,and it is also assigned to the number by the keyword const.
    
   function convertToPercentage(decimalNumber) {
    const percentage = `${decimalNumber * 100}%`;

    return percentage;} 
 
console.log(0.5);
