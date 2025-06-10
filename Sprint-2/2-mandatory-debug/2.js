// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// Prediction: The function will always return "3" for all calls.
// This is because the `getLastDigit` function uses the globally defined constant `num = 103`
// and does not declare or use a parameter, thus ignoring the arguments (42, 105, 806) passed to it.

const num = 103;

function getLastDigit() { // This function takes no parameters
  return num.toString().slice(-1); // It always uses the global 'num'
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
// Explanation:
// The `getLastDigit` function is defined without any parameters in its signature (i.e., `function getLastDigit()`).
// When a function is called, even if arguments are provided (like `42` in `getLastDigit(42)`),
// those arguments are ignored by the function if it doesn't have corresponding parameters to accept them.
// Inside the function, `return num.toString().slice(-1);` refers to the `const num = 103;` declared in the global scope.
// Because the function always accesses this global `num` and ignores its arguments,
// it consistently returns the last digit of 103, which is "3", for every call.

// Finally, correct the code to fix the problem
// =============> write your new code here

// Fixed Code:
function getLastDigit(number) { // Added 'number' as a parameter to accept the input
  return number.toString().slice(-1); // Now uses the passed 'number' argument
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// Explanation for the fix:
// The `getLastDigit` function was not working properly because it did not have a parameter defined.
// This meant that it couldn't accept the specific number for which we wanted to find the last digit.
// Instead, it was always relying on the global `num` variable, which was fixed at 103.
// To fix this, we need to add a parameter (e.g., named `number`) to the function's definition.
// This parameter acts as a placeholder that receives the value passed to the function when it's called (e.g., 42, 105, 806).
// By using this parameter (`number`) inside the function, the function can now operate on the specific input provided,
// making it truly reusable for any number.