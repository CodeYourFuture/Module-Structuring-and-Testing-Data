// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// i think the function won't return anything for numbers 42, 105 and 806 because the variable num contains value 103 and the return will only
// work with 103 inside the function. There is no relation between const num = 103; and 42, 105 and 806. 

// const num = 103;

// function getLastDigit() {
// return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// The output: 
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
// The output is quite similar to my prediction. When the function tried to find out function calls for getLastDigit(42), getLastDigit(105)
// and getLastDigit(806) it doesn't find any of these because those didn't match with the variable declaration. As the function wokred only
// with 103, it returned value for 103 and printed 3 as last digit for all three values. 
// Finally, correct the code to fix the problem
// =============> write your new code here
// The correct code:

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
