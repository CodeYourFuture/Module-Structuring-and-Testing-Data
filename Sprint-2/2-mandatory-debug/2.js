// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
//I think all three console.logs will output 3 because the function always uses the global variable.

/*const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);*/

// Now run the code and compare the output to your prediction
// =============> write the output here
/*The last digit of 42 is 3
The last digit of 105 is 3
The last digit of 806 is 3*/

// Explain why the output is the way it is
// =============> write your explanation here
/*The output is the way it is because the variable num (103) is declared 
in the global scope. The function getLastDigit always uses this global variable
 instead of the argument passed in, so it always returns the last digit of 103, which is 3.*/

// Finally, correct the code to fix the problem
// =============> write your new code here
function getLastDigit(num) {
  return num.toString().slice(-1);
}
console.log(`The last digit of 103 is ${getLastDigit(103)}`);
console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
