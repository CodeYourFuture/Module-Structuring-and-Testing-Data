// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
//The output will be:
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3
//
// All  outputs show "3" because the function not taking the parameter
// passe value to  'num' (which is 103), so it returns the last digit of 103, which is 3.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here

// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3
// Explain why the output is the way it is
// =============> write your explanation here
// The function getLastDigit() has TWO problems:
// The function definition doesn't have a parameter,
// it can't receive the values (42, 105, 806) added to it.
//inside the function, it uses the global constant
// 'num' (which is 103) instead of using the parameter 
//getLastDigit(42) call  function not taking 42
//  num (103) converts to "103"
// -slice(-1) gets the last character  "3"
// returns "3" 
// Finally, correct the code to fix the problem
// =============> write your new code here

const num1 = 103;
function getLastDigit(number) {  // Added parameter 'number'
  return number.toString().slice(-1);  // Use 'number' instead of 'num'
}
console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
//The function has no parameter when call getLastDigit(42), 
// the number 42 is passed but storage variable to save it.
//  The function can't use it because it doesn't have a parameter to receive it.
