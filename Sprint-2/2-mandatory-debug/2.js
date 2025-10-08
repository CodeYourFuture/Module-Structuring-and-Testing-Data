// Predict and explain first...

// Predict the output of the following code:
// I predict that the output will be:
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

// After running the code, the actual output is:
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is

// My explanation:
// The problem is that the getLastDigit function ignores its parameter and always uses the global constant num which is set to 103:
// The function takes a parameter but doesn't use it
// Instead, it uses the global num variable (value: 103)
// 103.toString().slice(-1) always returns "3"
// So regardless of what number we pass to the function, it always returns "3"




// Finally, correct the code to fix the problem
// My new code:

function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem


// The output will now be:
// The last digit of 42 is 2
// The last digit of 105 is 5
// The last digit of 806 is 6

// The fix:
// I changed the function to use its parameter (number) instead of the global (num) variable
// The function now correctly returns the last digit of the number passed to it