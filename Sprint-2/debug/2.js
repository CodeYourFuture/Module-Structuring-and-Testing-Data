// Predict and explain first...



function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// num is not placed into parameter, when it is placed into function getLastDigit(num), const num = 103; is not relevant anymore.
// fixed by removing const num = 103; and placing variable num into function getLastDigit(num)
