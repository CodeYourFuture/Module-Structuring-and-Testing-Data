// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction 
//It should output string cannot be accessed because we are using normal brackets instead of square brackets

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============>The output was 3 for all instead of the last digit of each number.
//
// Explain why the output is the way it is
// =============> This is because we already declared the num variable as a constant
// Finally, correct the code to fix the problem
// =============> write your new code here 

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
//There was no parameter so the function wasn't running properly.
//function getLastDigit(num) {
 // return num.toString().slice(-1);
//}

//console.log(`The last digit of 42 is ${getLastDigit(42)}`);
//console.log(`The last digit of 105 is ${getLastDigit(105)}`);
//console.log(`The last digit of 806 is ${getLastDigit(806)}`);