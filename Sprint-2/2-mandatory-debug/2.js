// Predict and explain first...

// Predict the output of the following code:
// ==============> All three lines will print "3", because getLastDigit() ignores the number passed in and always uses the outer variable num (103), whose last digit is 3.

const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// ==============> The output was "3", "3", "3" as predicted.
// Explain why the output is the way it is
// ==============> getLastDigit didn't accept a parameter, so it always used the outer num variable (103) instead of the number passed in when calling the function.
// Finally, correct the code to fix the problem
// ==============> function getLastDigit(num) {
//   return num.toString().slice(-1);
// }

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
