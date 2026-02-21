// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// I predict that the output will be "The last digit of 42 is 3", "The last digit of 105 is 3", and "The last digit of 806 is 3" because the function 'getLastDigit' is using the variable 'num' which is set to 103, so it will always return the last digit of 103, which is 3, regardless of the input passed to the function.
const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// The output is "The last digit of 42 is 3", "The last digit of 105 is 3", and "The last digit of 806 is 3". This matches my prediction because the function 'getLastDigit' is using the variable 'num' which is set to 103, so it will always return the last digit of 103, which is 3, regardless of the input passed to the function.
// Explain why the output is the way it is
// =============> write your explanation here
// The output is the way it is because the function 'getLastDigit' is not using the parameter 'number' that is passed to it.
//  Instead, it is using the variable 'num' which is set to 103.
//  Since 'num' is not changing based on the input, the function will always return the last digit of 103, which is 3, regardless of the input passed to the function. To fix this issue, we need to change the function to use the parameter 'number' instead of the variable 'num'.
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
// GetLastDigit seems not to work properly because the variable num is never passed into the function.
// The fix is to call getLastDigit(num) so the function uses that value.
