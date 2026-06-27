// Predict and explain first...

// Predict the output of the following code:
// =============> I predict the code function in this file will extract the last digit of number for us. The function itself seems working fine and the function call statement should work fine too. But the issue is that there is a declaration of variable 'num' on line 6 which will fix all the input to the function statement so we cannot expect the correct return value in this code.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> As expected, all the return value is '3' for the function with difference parameter called.
// Explain why the output is the way it is
// =============>  As the declared variable 'num' has been assigned with a fixed value. 
// Finally, correct the code to fix the problem
// =============> function getLastDigit(num) {
// =============>   return num.toString().slice(-1);
// =============> }

// =============> console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// =============> console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// =============> console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
//The overall syntax in this code works fine and it trigger no error. But the code doesn't work properly and doesn't show the digit we expected is because it tried to declare the num with a fixed number in the beginning of code instead of putting it in the parenthesis of function. It makes the parameter cannot be successfully pass to the function, so the outcome will not be right.
