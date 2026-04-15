// Predict and explain first...


// Predict the output of the following code:
// =============> Write your prediction here.
// //ANS: To return the last digit of num as a string.


const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3
// Explain why the output is the way it is
// =============> write your explanation here. 
// //ANS: 
// num is a constant variable, a hardcoded reference.
//The function getLastDigit is currently ignoring the arguments you pass to it(42, 105, 806) because of two main issues:

//Missing Parameter: The function definition function getLastDigit() does not have a parameter inside the parentheses.In JavaScript, if you pass an argument to a function that hasn't defined a parameter to receive it, the function simply ignores that input.

//Scope and Variable Reference: Inside the function, you are explicitly calling num.toString().Since num isn't defined inside the function, the engine looks at the Global Scope, finds const num = 103, and uses that value every single time the function runs.

// Finally, correct the code to fix the problem
// =============> write your new code here
const num = 103; // This is now ignored by the function

// We add 'n' as a parameter to "catch" the numbers we pass in
function getLastDigit(n) {
  // We call toString() on 'n' instead of the global 'num'
  return n.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
//ANS: Done above.
// ANS:getLastDigit was not working properly because the value for num is fixed at '103'

