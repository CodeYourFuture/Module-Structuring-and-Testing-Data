// Predict and explain first...
// We have fixed the global value of num to 103
const num = 103;
// so this function will always return 3
function getLastDigit() {
  return num.toString().slice(-1);
}
// prediction: "The last digit of 42 is 3"
console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// prediction: "The last digit of 105 is 3"
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// prediction: "The last digit of 806 is 3"
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

function getLastDigitFixed(digits) {
  return digits.toString().slice(-1);
}

// Explanation:
// The function getLastDigit is not working properly because it is not accepting any arguments.
// It is using a global variable num which is set to 103.
// https://developer.mozilla.org/en-US/docs/Glossary/Global_variable
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope
// The function should accept an argument and return the last digit of that argument.
// I fixed this by adding a parameter to the function and returning the last digit of that parameter.

console.assert(getLastDigitFixed(42) === "2", `The last digit of 42 is 2}`);
console.assert(getLastDigitFixed(105) === "5", `The last digit of 105 is 5}`);
console.assert(getLastDigitFixed(806) === "6", `The last digit of 806 is 6}`);
