// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
all the output values are going to be 3
const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
my prediction was correct

// =============> write the output here
// Explain why the output is the way it is
the num was declared a const value so any other value couldnt work
// =============> write your explanation here
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
getLastDigit was not working because there was a constant num value so that value was overriding any other value that was being tested
