// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// I predict that the three console.log messages will always output 3.
// This is due to the fact that the const num is defined as 103 and the program will always use that global value as the source of truth.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

//console.log(`The last digit of 42 is ${getLastDigit(42)}`);
//console.log(`The last digit of 105 is ${getLastDigit(105)}`);
//console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
// The global value that is defined outside of the function is used as the source of truth.
// Therefore when the program executes the line return num.toString().slice(-1); it always considers the global value.
// The console.log ignores the values.

// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
