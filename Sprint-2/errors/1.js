// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
__________________________________SOLUTION__________________________________
/*
The function takes a parameter named decimalNumber.
Inside the function, there is an attempt to redeclare the decimalNumber parameter as a const variable:
This causes a variable shadowing issue. In JavaScript, you cannot redeclare a parameter as a variable in the same scope.
When this line is reached, JavaScript will throw a SyntaxError: */

  //                                                SyntaxError: Identifier 'decimalNumber' has already been declared

//   Global console.log Call:
console.log(decimalNumber);     //  The variable decimalNumber is not declared in the global scope, so this line will cause a ReferenceError:
// ReferenceError: decimalNumber is not defined

//  Here is the Corrected Code:


// Use a default parameter for decimalNumber
function convertToPercentage(decimalNumber = 0.5) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

// Correct the console.log by defining decimalNumber or using it correctly
const decimalNumber = 0.25; // Declare this globally if required
console.log(`The global decimal number is: ${decimalNumber}`);

// Call the function and log its result
console.log(`The percentage is: ${convertToPercentage(decimalNumber)}`);

/*
The outputs will be: The global decimal number is: 0.25
                     The percentage is: 25%             
*/