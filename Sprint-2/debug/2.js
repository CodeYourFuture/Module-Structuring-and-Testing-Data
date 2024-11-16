// Predict and explain first...

/*
we can not run this function because we settle the variable with const and this won't allow us to reassign 
the new value which we are trying to test in the console.log()

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

*/

//=========== This will  work ==============

function getLastDigit(num) {
  return num.toString().slice(-1); 
}


console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
