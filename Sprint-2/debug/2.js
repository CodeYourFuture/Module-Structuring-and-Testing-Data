// Predict and explain first...

/*const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

/*Answer :
 The current implementation of getLastDigit does not work as intended because:
The function getLastDigit does not accept any arguments. Instead, it relies on the variable num, which is fixed at 103 in this code.
When getLastDigit() is called with different arguments (42, 105, 806), these arguments are ignored because the function does not have any parameters. As a result, it always returns the last digit of 103, which is 3.
Solution
To fix this, we need to modify getLastDigit to accept a parameter and return the last digit of that parameter. Here’s the corrected code.*/
function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
