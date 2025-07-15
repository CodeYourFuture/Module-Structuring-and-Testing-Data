// Predict and explain first...

// Predict the output of the following code:

// I expect all 3 lines to print:

// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

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

// my prediction and the out come is the same

// Explain why the output is the way it is

/*Since the function doesn’t take any input (no parameter), it always uses the global variable num, which is set to 103.
So even if we try to pass a different number, the function still uses 103.
That means the output will always show the last digit of 103, which is "3".*/

// Finally, correct the code to fix the problem

// We need to change the function so it takes a parameter (a number),and uses that number instead of the hardcoded num.

function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

//The last digit of 42 is 2
//The last digit of 105 is 5
//The last digit of 806 is 6

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
