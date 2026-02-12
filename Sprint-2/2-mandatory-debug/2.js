// Predict and explain first...

// Predict the output of the following code:
// =============> The output will always be 3 for all cases.


// Now run the code and compare the output to your prediction
// =============> write the output here 
// The last digit of 42 is 3
//The last digit of 105 is 3
//The last digit of 806 is 3
// Explain why the output is the way it is
// =============> write your explanation here
//The function does not have a parameter.
//It does not use the values 42, 105, or 806.
//It always uses the global variable:
// Finally, correct the code to fix the problem
// =============> write your new code here
const num = 103;

function getLastDigit(value) {
  return value.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);


// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
