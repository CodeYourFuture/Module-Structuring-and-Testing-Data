// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here

/**
 * The last digit of 42 input is '3'
 * The last digit of 105 input is '3'
 * The last digit of 806 input is '3'
 */

/**
 * Original function:
 *
 * const num = 103;
 *
 * function getLastDigit() {
 * return num.toString().slice(-1);
 * }

 * console.log(`The last digit of 42 is ${getLastDigit(42)}`);
 * console.log(`The last digit of 105 is ${getLastDigit(105)}`);
 * console.log(`The last digit of 806 is ${getLastDigit(806)}`);
*/

// Now run the code and compare the output to your prediction
// =============> write the output here

/**
 * The last digit of 42 input is '3'
 * The last digit of 105 input is '3'
 * The last digit of 806 input is '3'
 */

// Explain why the output is the way it is
// =============> write your explanation here

/**
 * Explanation:
 *
 * The function getLastDigit() is not working properly because:
 * It's ignoring the parameter: The function is defined to take a parameter, but when calling the function it's using the global variable num (which is set to 103) instead of the parameter passed to it.
 * No parameters in function definition: The function is defined as function getLastDigit() without any parameters, so when we call getLastDigit(42), the 42 is ignored.
 * Fixed value: The function always returns the last digit of 103 (which is "3"), regardless of what number is passed to it.
 * That's why all three console logs show "3" - they're all getting the last digit of 103, not the numbers 42, 105, and 806 passed.
 */

// Finally, correct the code to fix the problem
// =============> write your new code here

const num = 103;

function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

function getLastDigit(number) {
  return number.toString().slice(-1);
}

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

/**
 * The key fix was adding a parameter number to the function definition and using that parameter inside the function instead of the global num variable. Now each call to the function getLastDigit() works with the specific number passed to it.
 */

