// Predict and explain first...

//const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
//It shows 3 as a result for all of them because the variable non is set on 103.
//We need to update the function getLastDigit to accept an argument, so it can calculate the last digit for any number.
