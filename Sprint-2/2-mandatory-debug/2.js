// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// Answer | The output will be the same for all three messages as function getLastDigit() is using num = 103, last digit will be 3.
/*const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
*/
// Now run the code and compare the output to your prediction
// =============> write the output here
/* /Users/cristina/.nvm/versions/node/v22.13.1/bin/node ./2-mandatory-debug/2.js
The last digit of 42 is 3
2.js:12
The last digit of 105 is 3
2.js:13
The last digit of 806 is 3
*/
// Explain why the output is the way it is
// =============> write your explanation here
// As constant num is declared and assigned a value in the global frame, getLastDigit frame will use the const num value. 

// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// I have assigned num as a parameter for getLastDigit() and removed the declaration of the constant variable num, this way the function will accept parameters and print the following.

//The last digit of 42 is 2
//The last digit of 105 is 5
//The last digit of 806 is 6