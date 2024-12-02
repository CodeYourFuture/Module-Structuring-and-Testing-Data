// Predict and explain first...

//const num = 103; // the first problem. why hardcode it for a function?

function getLastDigit(num) { //here i added the num variable to be taken in by the function now it works as expected.
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

