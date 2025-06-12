// Predict and explain first...
// The last digit of 42 is 3
//The last digit of 105 is 3
//The last digit of 806 is 3
//because its using the variable function num =103 hence the output will always be 3

// Predict the output of the following code:
// =============> Write your prediction here

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// The last output of each num is 3 
// =============> write the output here
// Explain why the output is the way it is
// =============> write your explanation here
// Finally, correct the code to fix the problem

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);






// =============> write your new code here

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
