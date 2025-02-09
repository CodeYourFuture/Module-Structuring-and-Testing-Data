// Predict and explain first...because of const num, it won't change output.

// Predict the output of the following code:
// =============> Write your prediction here: 3 

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here: 3 for all console.log.
// Explain why the output is the way it is
// =============> write your explanation here: 3 for all of the the console.log because it won't take any argument it will always take const argument.
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
because of line 6.