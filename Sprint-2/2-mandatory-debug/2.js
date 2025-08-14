// Predict and explain first...

// Predict the output of the following code:
// =============> return undefiend

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> the function will return the last digit of 103 ==> 3
// Explain why the output is the way it is
// =============> doesn't take any parameters, so it always uses the constant `num = 103`.
// Finally, correct the code to fix the problem
// =============> write your new code here


function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem It relied on a global variable num. It ignored the arguments passed to it.
