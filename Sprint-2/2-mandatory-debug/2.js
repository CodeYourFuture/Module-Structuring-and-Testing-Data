// Predict and explain first...

// Predict the output of the following code:
// It will return the last digit of the number 103 which is 3 because the function getLastDigit is using the variable num which is set 
// in the const num = 103; and not the parameter passed to the function getLastDigit. 

/*const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);*/

// Now run the code and compare the output to your prediction
// =============> The last digit of 42 is 3
//The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> as explained above, the const num = 103; is being used in the function getLastDigit instead of the parameter passed to the function.
// Finally, correct the code to fix the problem

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);


