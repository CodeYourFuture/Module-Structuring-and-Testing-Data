// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// Prediction
// When the function is called, I predict that the output will always be 3.
// This is because the variable 'num' is defined outside the function and is always 103.
// Therefore, regardless of the argument passed to getLastDigit, it will always return the last digit of 103, which is 3.

 // const num = 103;

// function getLastDigit() {
  //return num.toString().slice(-1);
//}

//console.log(`The last digit of 42 is ${getLastDigit(42)}`);
//console.log(`The last digit of 105 is ${getLastDigit(105)}`);
//console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// Output
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
// Explanation
// The output will always be 3 because the function getLastDigit does not have a parameter so can not accept any arguments.

// Finally, correct the code to fix the problem
// =============> write your new code here
// New code
function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
