// Predict and explain first...
//I predict that the function will return the last value of the string num but it will be constant so it will be 3 all the time
const num = 103;

function getLastDigit(inputNum) {
  return inputNum.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

//I had to make a parameter for the function to take in instead of having a constant value that it uses, I made the const let and I added the parameter num to the getLast Digit Function

//f a variable is declared inside a function, its scope is limited to that function (local scope). If it's declared outside any function, it has a global scope.

//Variable shadowing occurs when a local variable (inside a function) has the same name as a variable in the outer (global) scope. The local variable "shadows" the global variable, meaning the function will use the local variable instead of the global one.