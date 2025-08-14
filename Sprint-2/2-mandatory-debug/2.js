// Predict and explain first...
// The function must show the last digit a number, starting with 103, that is to say 3. 
// Then evaluate other numbers; 42 result 2, 105 result 5, and 806 result 6.
// Predict the output of the following code:
// =============> Write your prediction here
// The console messages will show undefined results.
const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
/*
The last digit of 42 is 3
The last digit of 105 is 3
The last digit of 806 is 3
 */
// Explain why the output is the way it is
// The function take the the number 103 from the variable num in the execution, getting the result 3. 
// However, the parameter of the function was not stablish with the variable. As a result, the return never changed. 
// =============> write your explanation here
// The parameter of the function was not stablish with the variable. As a result, the return never changed. 
// Finally, correct the code to fix the problem
// =============> write your new code here
const num = 103;
function getLastDigit(num){
  return num.toString().slice(-1);
}
console.log(`The last digit of 32 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
