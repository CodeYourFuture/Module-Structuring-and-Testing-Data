// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here

// I predict that the code will output 'undefined' for each call to getLastDigit because the function does not use its parameter.

// This program should tell the user the last digit of each number.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here

// The output will be:
// The last digit of 42 is undefined
// The last digit of 105 is undefined
// The last digit of 806 is undefined

// Explain why the output is the way it is
// =============> write your explanation here
// The output is 'undefined' because the function getLastDigit does not use its parameter.
// It always returns the last digit of the variable num, which is 103, not the number passed to it.

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
