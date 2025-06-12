// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
the output :
The last digit of 42 is 2
The last digit of 42 is 5
The last digit of 42 is 6

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
'The last digit of 42 is 3'
'The last digit of 105 is 3'
'The last digit of 806 is 3'

// Explain why the output is the way it is
// =============> write your explanation here
Because this function hasn't any input parameter and  num is a constant variable with the value "103" .
This function output is 3 every time.
  
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
My code is working properly.
This is the output:
'The last digit of 42 is 2'
'The last digit of 105 is 5'
'The last digit of 806 is 6'
