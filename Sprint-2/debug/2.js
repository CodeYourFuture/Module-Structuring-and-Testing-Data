// Predict and explain first...
// getLastDigit is not going to work because num is a constant value.
// num needs to be passed as an argument to the function

// const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`); // 2
console.log(`The last digit of 105 is ${getLastDigit(105)}`); // 5
console.log(`The last digit of 806 is ${getLastDigit(806)}`);// 6

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
