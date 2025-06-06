// Predict and explain first...

// Predict the output of the following code:
// in all 3 outputs, the result will be 3.  this is because when the functions are called, this is because num is a global variable and 
// its value overrides any other input a function may have. when the code in the body of the function gets executed -1 is the first 
//position from the right and thus 3 is sliced and returned whenever the function is called regardless of the input.

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here: 3 in all 3 cases.
// Explain why the output is the way it is
// =============> write your explanation here: mentioned already (lines 4-6)
// Finally, correct the code to fix the problem



function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem: already explained and issue is solved as demonstrated above.
