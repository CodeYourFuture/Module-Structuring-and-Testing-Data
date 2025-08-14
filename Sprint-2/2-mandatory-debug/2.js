// Predict and explain first...

// Predict the output of the following code:
// =============> I think it will return only 3 for every input .

//const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> 3
// Explain why the output is the way it is
// =============> The function do not take any parameter and it is taking the constant variable return the last digit.
// Finally, correct the code to fix the problem
// =============> function getLastDigit(num) {
  //return num.toString().slice(-1);
// }

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
