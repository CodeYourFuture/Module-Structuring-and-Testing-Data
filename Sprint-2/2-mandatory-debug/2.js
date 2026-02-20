// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here

// I think the program will print 3 every time.
// Even though different numbers are passed into the function,
// the function is using the variable 'num', which is 103.


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
// =============> write your explanation here

// The function does not define a parameter,nso it cannot use the value that is passed into it.
// Instead, it uses the global variable 'num',which is set to 103.
// Even though getLastDigit is called with different numbers,those values are ignored because the function does not accept them.
// That is why it always returns the last digit of 103, which is 3.

// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);


// The function was not working properly because it did not define a parameter.
// Even though values were passed into getLastDigit when it was called,the function could not use them.
// Because there was no parameter, it always used the global variable 'num', which was set to 103. That is why it always returned 3.
// To fix the problem, I added a parameter to the function so it uses the value passed into it instead of the global variable.


