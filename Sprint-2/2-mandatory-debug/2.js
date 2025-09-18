// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// The output should always be 3 because the parameter is not defined in the function,
// and the variable num is always 103 in the global scope.

const num = 103;
/*
function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
*/
// Now run the code and compare the output to your prediction
// =============> write the output here
/*
The last digit of 42 is 3
The last digit of 105 is 3
The last digit of 806 is 3
*/
// As expected, the output is always 3.

// Explain why the output is the way it is
// =============> write your explanation here
//The num is defined in the global scope as 103.
// And the function does not accept any parameters.
// So every time the function is called, it returns the last digit of 103, which is 3.

// Finally, correct the code to fix the problem
// =============> write your new code here
function getLastDigit(num) {
  return num.toString().slice(-1);
}
console.log(`The last digit of 42 is ${getLastDigit(42)}`); // should return 2
console.log(`The last digit of 105 is ${getLastDigit(105)}`); // should return 5
console.log(`The last digit of 806 is ${getLastDigit(806)}`); // should return 6

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
