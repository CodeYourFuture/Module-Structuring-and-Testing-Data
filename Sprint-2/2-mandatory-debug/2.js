// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here: the function const should write inside the call function.//

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here: The output is 3 for all three calls.
// Explain why the output is the way it is
// =============> write your explanation here: The function getLastDigit is not taking any parameters, so it always uses the outer variable num, which is 103. That's why the output is always 3.
// Finally, correct the code to fix the problem
// =============> write your new code here:

/*function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`); */

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
