// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// The function will always return "3" because it uses the outer constant num=103 and ignores the argument.


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
// The function getLastDigit does not take any parameters,
// so the numbers passed in the calls are ignored.
// It always returns the last digit of the constant variable num = 103.
// so the returned last digit is always "3".


// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// Explanation:
// The getLastDigit function does not have a parameter to accept a number,
// so it always uses the global constant 'num' which is set to 103.
// Because of this, the function ignores the number passed when called,
// and always returns the last digit of 103, which is "3".

// To fix this, we need to add a parameter to the function,
// so it takes the number to process as input.
