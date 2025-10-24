// Predict and explain first...

// Predict the output of the following code:
// =============> I predict that the code might not work because I am declaring num outside the function also I am giving num a constant value means it will always be 103

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> the code worked but the answer was 3 i predicted an error message.
// Explain why the output is the way it is
// =============> the output was 3 because at the beginning  it we declared that num value as 103
// Finally, correct the code to fix the problem
// =============> corrected code is running the code without giving num any value  and add num in the function 

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - it was not working at the start because every time we run the code would slice the last number of the 103 because we declared num as a constant with value 103 
