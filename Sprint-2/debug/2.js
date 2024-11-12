// Predict and explain first...
// 〰️ The program is not behaving as intended because the getLastDigit function is relying on a fixed, global variable num, rather than taking a parameter to accept any number. This results in getLastDigit always returning the last digit of 103, regardless of which number you intend to check.

// 〰️ To fix this, modify getLastDigit so it takes a parameter (e.g., number) and uses this parameter to get the last digit, instead of the fixed variable num:

function getLastDigit(num) {
  return num.toString().slice(-1);  // Get the last digit of the given parameter
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// 〰️ The function getLastDigit does not take any parameters, so it ignores the arguments passed to it (e.g., 42, 105, 806).
// 〰️ Instead, it always uses the global variable num, which is set to 103, and returns the last digit of 103, which is "3".
// 〰️ As a result, all three calls to getLastDigit will return "3".