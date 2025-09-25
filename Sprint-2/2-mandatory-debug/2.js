// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
/* The output will be "The last digit of 42 is 3", "The last digit of 105 is 3", and "The last digit of 806 is 3" because 
the function getLastDigit always returns the last digit of the constant number 'num', which is set to 103.*/

/*
const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
*/

// Now run the code and compare the output to your prediction
// =============> write the output here
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3 

// Explain why the output is the way it is
// =============> write your explanation here
/* The output is the way it is because the function getLastDigit does not use its parameter. Instead, it always
returns the last digit of the constant variable 'num', which is set to 103. Therefore, regardless of the input 
value provided when calling getLastDigit, it will always return '3', the last digit of 103. To fix this, we need 
to modify the function to accept a parameter and return the last digit of that parameter.*/

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// the return function is not using the parameter passed to it and is instead using a constant value


// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

