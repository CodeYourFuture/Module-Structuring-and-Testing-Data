// Predict and explain first...

const num = 103;

function getLastDigit() {
  return num.toString().slice(num.length - 1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

//Using slice(-1) is not a feasible method to use in this case. The correct way to do the code is by using num.toString().slice(num.length - 1)