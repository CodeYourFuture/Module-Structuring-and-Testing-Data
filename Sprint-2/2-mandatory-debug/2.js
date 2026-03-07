// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// The code will output: "The last digit of 42 is 3", "The last digit of 105 is 3", and "The last digit of 806 is 3". This is because the function getLastDigit is using the variable num, which is set to 103, instead of the parameter passed to the function. Therefore, it will always return the last digit of 103, which is 3.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// The output is:
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3
// Explain why the output is the way it is
// =============> write your explanation here
// The output is the way it is because the function getLastDigit is not using the parameter passed to it. Instead, it is using the variable num, which is set to 103. Therefore, regardless of the input, the function will always return the last digit of 103, which is 3. To fix this issue, we need to modify the function to use the parameter instead of the variable num.
// Finally, correct the code to fix the problem
// =============> write your new code here
function getLastDigit(num) {
  return num.toString().slice(-1);
}

// Now the function getLastDigit will return the last digit of the number passed as an argument, and the output will be:
// The last digit of 42 is 2
// The last digit of 105 is 5
// The last digit of 806 is 6 

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// The function getLastDigit is not working properly because it is using a global variable num instead of the parameter passed to the function. To correct this problem, we need to change the function definition to accept a parameter and use that parameter to calculate the last digit. The corrected function should look like this:
function getLastDigit(num) {
  return num.toString().slice(-1);
}

// Now the function will work correctly and return the last digit of the input number.  
