// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// Since we haven't defined a parameter for the function, it won't use any arguments we pass to it. 
// Instead, every time we call the function, it will use the num value in its calculation. 

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// we get the same output for all the consol,log

// =============> write your explanation here
// we get the same output because the Function is not using the argument we send 
// but instead is using the number in the variable num 

// Finally, correct the code to fix the problem
// =============> write your new code here
// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);