// Predict and explain first...
// Why will an error occur when this program runs?
// =============> write your prediction here
/*
   an error will occur when the code runs because the variable decimalNumber is being declared
  two time, the second declaration  const decimalNumber =  inside the convertToPercentage function,
  but decimalNumber is also being passed as an argument to the function. This creates a variable
  shadowing conflict because you cannot define the same variable twice in the same scope. 
  decimalNumber is a local variable inside the function and console.log(decimalNumber) is logging the 
  variable outside the function but cant access the decimalNumber variable 
  */
 /*
  const decimalNumber = 0.5;
          ^

  SyntaxError: Identifier 'decimalNumber' has already been declared
*/

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
/* to fix the code we need to remove the redeclaration "const decimalNumber = 0.5;"
  and call the function and log it 
*/

// Finally, correct the code to fix the problem
// =============> write your new code here
/*
function convertToPercentage(decimalNumber){
  const percentage = `${decimalNumber * 100}%`
  return percentage;
}

console.log(convertToPercentage(0.5));

*/
