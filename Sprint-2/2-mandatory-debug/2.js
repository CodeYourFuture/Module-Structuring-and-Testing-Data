// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
//============Prediction========
// I think the code output will be  "3" in al three cases as "num variable is declared outside the function and 
// not used as a parameter for the function"

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// prediction matched
// =============> write the output here
/*The last digit of 42 is 3
The last digit of 105 is 3
The last digit of 806 is 3*/
// Explain why the output is the way it is
// =============> write your explanation here
//===============Explanation===========
// The variable is not used as a parameter of the function, and therefore
//  is ignored when passed inside function call.
// Finally, correct the code to fix the problem
//
// =============> write your new code here
//const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// =============explanation==================
// The variable is not used as a parameter of the function, and therefore
//  is ignored when passed inside function call.
