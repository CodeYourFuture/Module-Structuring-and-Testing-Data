// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

 function convertToPercentage(decimalNumber) {
   
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
 }

console.log(convertToPercentage(0.5));

// The function takes a parameter named decimalNumber but then redeclares it with const decimalNumber = 0.5; within the function body. This results in a SyntaxError because decimalNumber is already defined as a parameter, and you cannot redeclare it with const or let in the same scope.

//SyntaxError: Identifier 'decimalNumber' has already been declared
//Undefined Variable in console.log: The line console.log(decimalNumber); is outside of the function convertToPercentage and attempts to access decimalNumber, which is not defined in the global scope. This results in a ReferenceError. The error message will likely be:

// ReferenceError: decimalNumber is not defined

