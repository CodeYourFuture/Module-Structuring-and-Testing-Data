// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here - There is no num parameter defined in the getLastDigit(). The parenthesis is blank

//const num = 103;

//function getLastDigit() {
//  return num.toString().slice(-1);
//}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here - The output shows 3 for all
// Explain why the output is the way it is
// =============> write your explanation here - Since the parameter num is not defined, it will always pick up the const number and hence ignore all other numbers
// Finally, correct the code to fix the problem
// =============> write your new code here
const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
