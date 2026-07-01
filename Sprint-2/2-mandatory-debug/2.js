// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here: the code is already declared a variable that can not be changed so the consol.log always be the same 3.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here: 3
// Explain why the output is the way it is
// =============> write your explanation here: the code is already declared a variable that can not be changed in the
//                                             first place so when ever the process try to access another console.log it will take the same value as before
//                                             so the consol.log always be the same.
// Finally, correct the code to fix the problem
// =============> write your new code here: function getLastDigit(num) {
//                                             return num.toString().slice(-1);
//                                           }

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
