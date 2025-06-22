// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// The function is created without a parameter so all the print statements will output errors.
// Also the "num" within the function has been declared to constantly be 103 so we will always
// get "3" everytime we run the function.   

/* const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`); */

// Now run the code and compare the output to your prediction
// =============> write the output here ==> It gave the predicted output printing "3" for all 3 statements
// Explain why the output is the way it is
// =============> write your explanation here==> the function uses the value of num which has a constant value of 3.
// Finally, correct the code to fix the problem

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem ==> there should not 
// be a constant declaration and num should be made the parameter of teh function that will then 
// be worked on within the function.
