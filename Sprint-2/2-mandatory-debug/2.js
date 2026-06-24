// Predict and explain :
//The getLastDigit function always returns the last digit of 103, because it does not use the input value passed to it. Instead, it uses the global variable num.
//So every call returns 3.

//----------------------------------------------------------------------------------------------------------

// My Prediction of the output of the Original code :
//The last digit of 42 is 3
//The last digit of 105 is 3
//The last digit of 806 is 3

//----------------------------------------------------------------------------------------------------------

//Original code :
/*const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}
console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);*/

//----------------------------------------------------------------------------------------------------------

// output of the Original code :
//Answer :
//The last digit of 42 is 3
//The last digit of 105 is 3
//The last digit of 806 is 3

//----------------------------------------------------------------------------------------------------------

// Explaination of why the output the way it is :
// The function does not use its parameter correctly.
// It ignores the value passed into it and instead uses the global variable num.
// That is why all outputs are the same.

//----------------------------------------------------------------------------------------------------------

//new code :
const num = 103;
function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
