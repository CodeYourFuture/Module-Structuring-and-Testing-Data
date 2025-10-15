// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// PREDICTION: The function will log the last digit of the number passed to it, but it will not work as intended because the num variable is defined outside the function and is not being passed as an argument.


// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction

// =============> write the output here
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3
// Explain why the output is the way it is
// The output is not as expected because the getLastDigit function is not using the argument passed to it. Instead, it is using the num variable defined outside the function, which is not being updated with the new values.
// =============> write your explanation here
// The getLastDigit function should take a number as an argument and return the last digit of that number. However, it is currently using the num variable defined outside the function, which is not being updated with the new values passed to the function.
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
// The getLastDigit function should take a number as an argument and return the last digit of that number. However, it is currently using the num variable defined outside the function, which is not being updated with the new values passed to the function.