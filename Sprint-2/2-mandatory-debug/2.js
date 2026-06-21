// Predict and explain first...

// Predict the output of the following code:
// the last digit of any number will always be 3 becuse of the const num = 103;
/*
const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
*/
// Now run the code and compare the output to your prediction
// =============> output is as predicted, the last digit of any number will always be 3 because of the const num = 103;
// Explain why the output is the way it is
// =============> // num is always 103, so the function always returns 3.
// Finally, correct the code to fix the problem


function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);


// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
