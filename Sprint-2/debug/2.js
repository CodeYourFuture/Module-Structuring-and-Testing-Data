// Predict and explain first...

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// it will show "3" for all each number. 
// because we defined num variable and gave it a number and each time the function is using that number
// we have to use a variable which we give the number each time and the function can use it
