// Predict and explain first...
   //Error 'consol decimslNumber'
// Why will an error occur when this program runs?
// =============> write your prediction here
   // The function was already given number(decimalNumber) but we tried to create another
   // one with the same name inside the function 
   // At the end, we tride to consol.log decimalNumber outside the function, but it doesn't exist there.  
// Try playing computer with the example to work out what is going on
    //SyntaxError: Identifier 'decimalNumber' has been declared
//function convertToPercentage(decimalNumber) {
  //const decimalNumber = 0.5;
  //const percentage = `${decimalNumber * 100}%`;

  //return percentage;
//}

//console.log(decimalNumber);

// =============> write your explanation here
   // 1. We don't create another decimalNumber inside the function – we already have one!
   // 2. Use it directly to do the math.
   // 3. Store the result and print it the right way.
// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

const result = convertToPercentage(0.5);
console.log(result); 
