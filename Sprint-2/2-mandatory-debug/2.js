// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// I expect each of the calls to return the last digit of "num" which is "3" its defined as a constant and we are using that const in the return statement.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// Output:
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
// The output is the same for all three calls because the function getLastDigit does not take any parameters. It always uses the constant "num" which is defined as 103, and will always returns the last digit of 103, which is "3".

// Finally, correct the code to fix the problem
// =============> write your new code here

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
