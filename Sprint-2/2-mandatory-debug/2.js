// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here --  Answer 💡: no parameter for function getLastDigit()

/*const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`); */

// Now run the code and compare the output to your prediction
// =============> write the output here
//
/* -- because there's no parameter, the console logs teh following for all the function calls
The last digit of 42 is 3
The last digit of 105 is 3
The last digit of 806 is 3*/

// Explain why the output is the way it is
// =============> This is as a result of the function always using the constant variable num, outside the function, which is set to 103, to get its answer.
// Finally, correct the code to fix the problem
// =============> write your new code here

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// The function now takes a parameter 'number' and uses it to get the last digit of the number passed to it. This is because .slice(-1) is used to get the last character of the string representation of the number.
