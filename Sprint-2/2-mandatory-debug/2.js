// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here

// It's putting the answer to everything as 3, the last digit of the contant.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here

// My prediction was correct.

// Explain why the output is the way it is
// =============> write your explanation here

// function getLastDigit() should have "theNumber" or something in its brackets.  It's getting the last digit of the constant as the answer to everything at the moment.

// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1);
}

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
