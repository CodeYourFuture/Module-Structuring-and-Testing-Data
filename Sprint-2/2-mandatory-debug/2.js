// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// The output will be 3 for every function call. 
// This is because the function does not have a parameter, so it ignores the values passed in the function calls. 
// Instead, it uses the global variable num, which is set to 103. 
// The last digit of 103 is 3, so the function always returns 3.
// variable num inside function take the input from the global variable num in the outside of the function

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
// The function getLastDigit does not have a parameter.
// Even though values like 42, 105, and 806 are passed when calling the function, they are ignored.

// Inside the function, the variable num refers to the global variable num, which is set to 103.

// Each time the function runs, it converts 103 to a string and extracts the last character using slice(-1).

// The last digit of 103 is "3".

// Therefore, every function call returns "3".
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
// In the previous version, the function was not working properly because it used a global variable instead of a parameter. 
// Since the function did not define a parameter, it ignored the values passed during the function calls and always used the same global value.

// In the corrected version, the global variable was removed and a parameter num was added to the function definition. 
// Now, the function receives the argument passed during each function call and correctly returns the last digit of that number.

// Therefore, the output becomes:

// The last digit of 42 is 2
// The last digit of 105 is 5
// The last digit of 806 is 6
