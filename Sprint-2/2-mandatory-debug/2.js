// Predict and explain first...
// Predict the output of the following code:
// =============> Write your prediction here
//The code will always show 3 as the last digit because the function does not use the number inside getLastDigit().

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
// The function does not take any input parameter, it always uses the global variavle num = 103.
// Because of this the last digit returend is always 3, regardless of the number passed in the function call.

// Finally, correct the code to fix the problem
// =============> write your new code here
function getLastDigit(num) {
  return num.toString().slice(-1);
}
console.log(`The last digit of 42 is $(getlastDigita(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// The function was fixed by adding a parameter so it can return the last digit of the given number.
