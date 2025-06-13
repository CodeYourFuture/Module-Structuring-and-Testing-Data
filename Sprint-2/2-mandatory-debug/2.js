// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// The variable 'num' is declared globally as '103', so the function always uses that meaning all outputs from the template strings will return '3' as the last digit.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
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

// This is happening because the function 'getLastDigit()' does not accept any parameters, instead using the global variable 'num' which is set to 103.
// Inside the function, 'num.toString()' turns the number (103) into a string and '.slice(-1);' takes just the last character (3). 
// The function then returns this last digit as a string.

// Finally, correct the code to fix the problem:
// =============> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 548 is ${getLastDigit(548)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
