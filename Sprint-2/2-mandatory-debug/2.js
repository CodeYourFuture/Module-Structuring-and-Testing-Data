// Predict and explain first...

// Predict the output of the following code:
// =============> there is no paramater for getLastDigit to work with but a fixed value of 103 outside the function, so the console will show 3 everytime. 

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> 
VM447:7 The last digit of 42 is 3
VM447:8 The last digit of 105 is 3
VM447:9 The last digit of 806 is 3

undefined

// Explain why the output is the way it is
// =============> because when the console.log calls for the function there are no parameters in it, so 42 gets ignored. 
//However 103 is used because it is part of the return function under num keyword. Therefore causing the error for all the console lines.


// Finally, correct the code to fix the problem
// =============> 
const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}
console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now, with getLastDigit having a num variable, function will be able to assign different digits when console calls on it. 


// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
