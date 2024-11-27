// Predict and explain first...

// Declare a constant `num` with the value 103
const num = 103;

// Define a function `getLastDigit()` which is intended to return the last digit of a number.
function getLastDigit() {
  // Convert `num` to a string and use `slice(-1)` to get the last character of the string.
  // But `num` is always 103, so this will always return '3' regardless of the argument passed.
  return num.toString().slice(-1);
}

// Log the result of calling `getLastDigit(42)`
// The function doesn't use the argument 42 and will always return '3' (from `num` = 103).
console.log(`The last digit of 42 is ${getLastDigit(42)}`);

// Log the result of calling `getLastDigit(105)`
// The function doesn't use the argument 105 and will always return '3'.
console.log(`The last digit of 105 is ${getLastDigit(105)}`);

// Log the result of calling `getLastDigit(806)`
// The function doesn't use the argument 806 and will always return '3'.
console.log(`The last digit of 806 is ${getLastDigit(806)}`);


// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem


// Explanation:
// The original function was using a fixed constant `num` to get the last digit, 
// which meant that it always returned the last digit of `103`, no matter 
// what number was passed to the function.
// To fix this, we need to update the function to accept a number as an argument 
// and use that argument to extract the last digit.

// Updated Function to Get Last Digit:
function getLastDigit(num) {
  // Convert the number to a string and use `slice(-1)` to extract the last digit.
  // We now use the `num` passed as an argument to the function.
  return num.toString().slice(-1); // This will correctly return the last digit of the number passed.
}

// Logging the results for different numbers:

// Call the function with 42
// The function should return '2' as it's the last digit of 42
console.log(`The last digit of 42 is ${getLastDigit(42)}`);  // Expected Output: 2

// Call the function with 105
// The function should return '5' as it's the last digit of 105
console.log(`The last digit of 105 is ${getLastDigit(105)}`);  // Expected Output: 5

// Call the function with 806
// The function should return '6' as it's the last digit of 806
console.log(`The last digit of 806 is ${getLastDigit(806)}`);  // Expected Output: 6


//NOTE : please comment first code if you want to run my codes ..