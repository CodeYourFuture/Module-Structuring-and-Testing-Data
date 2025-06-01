// Predict and explain first...
// Why will an error occur when this program runs?
// =============> write your prediction here
//Here again we are facing the same problem as 0.js. The variable decimalNumber is implicitly declared and we should not redeclare it.


// Try playing computer with the example to work out what is going on
// =============> write your explanation here
/*Imagine calling the function:
convertToPercentage(0.7);
We'll go line by line like the computer:
The computer sees the parameter decimalNumber = 0.7
Then it tries to run this line:
const decimalNumber = 0.5;
❗ Problem: JavaScript throws an error here, because we're trying to declare a new variable called decimalNumber, which already exists as a parameter.
The computer stops and throws a SyntaxError: Identifier 'decimalNumber' has already been declared.*/



// Finally, correct the code to fix the problem
// =============> write your new code here


function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));

/*If hardcoding is intentional we can use the default parameter : 
function convertToPercentage(decimalNumber = 0.5) {
  return `${decimalNumber * 100}%`;
}
*/