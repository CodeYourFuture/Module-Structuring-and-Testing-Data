// Predict and explain first...
/*
in the code we are trying to write a function and give it a value when we call it to return something 
but we already declared num outside the function at the very top line of the code this will create a logical error.
*/
// Predict the output of the following code:
// =============> i think the output will be undefined since no parameter is passed.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
/*
the output is 
The last digit of 42 is 3
The last digit of 105 is 3
The last digit of 806 is 3
it takes the num declared at the very top of the code since it is used inside the function it returns the lastdigit of it.
if num was not defined it is not still undefined but it will say num is not defined. my prediction is completely wrong.
*/
// Explain why the output is the way it is
// =============> because the function uses only the global variable num for all operations. since only num is called inside the function

// Finally, correct the code to fix the problem
/*

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
*/


// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem  : it is FIXED now.
