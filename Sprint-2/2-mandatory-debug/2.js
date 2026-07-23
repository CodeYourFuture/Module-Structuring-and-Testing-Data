// Predict and explain first...

// Predict the output of the following code:
// I think the output will be wrong because the function does not use
// the numbers passed into it. It always uses the const num = 103,
// so it will always return 3.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is

// The function is not working properly because it does not have a
// parameter to receive the numbers. It uses the global variable num,
// which is always 103, so it always returns the last digit of 103.


// Finally, correct the code to fix the problem

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// The function is not working properly because it does not use the
// number that is passed into it. It uses the global variable `num`,
// which is always 103, so it always returns 3.
// The function needs a parameter so it can use each number given to it.