// Predict and explain first...

// Predict the output of the following code:

// Will be an error because we are not passing a parameter in the function getLastDigit
// the value of num is taking always the value 103, it declarate at the beginning of the program 

// =============> Write your prediction here

// const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// Explain why the output is the way it is
// =============> write your explanation here
// Finally, correct the code to fix the problem
// =============> write your new code here

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
