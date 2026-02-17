// Predict and explain first...

// Predict the output of the following code:
// =============> In my knowledge only the output from line 6 will be printed correctly. As for line 12, 13, and 14 it will throw error or will print undefined as we don't declare any variable for them but only value.

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> the output after running the code is: ---The last digit of 42 is 3  --- The last digit of 105 is 3  --- The last digit of 806 is 3;
// my prediction was half correct as it worked only with line 6 but it did not throw error or undefined. here not syntax error but logical error.

// Explain why the output is the way it is
// =============> Its because JavaScript only calls the function 3 times, it does not read or ignore the value inside as they are not declared.

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
// ===> it was not working with line 12, 13, and 14 because we had not declared the variable inside the function parameter, to fix the issue is to declare the num variable inside the parameter of the function. and remove the const variable of num above the function or line 6.
