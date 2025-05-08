// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
  // there will be three lines in the output displaying the last numbers 2, 5 and 6
/*const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
  /* here is the output 
  referenceError: Cannot access 'num' before initialization 

  so i noticed that there was a global variable that was causing an error and there was no parameter "num"
// Explain why the output is the way it is
  // there is a variable that was declared in the global scope so we need to remove it so we can work only with code in the function locally
// =============> write your explanation here
// Finally, correct the code to fix the problem
// =============> write your new code here*/



function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);


// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
