// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
//Since getLastDigit() does not take any arguments and always uses the global num = 103, it will return '3' for every call.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
//The expected output will be:
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
// The function getLastDigit() does not accept any parameters, meaning it always works with the global variable num = 103.
//Regardless of the argument passed to getLastDigit(), it always returns the last digit of 103, which is '3'.
//The function calls getLastDigit(42), getLastDigit(105), and getLastDigit(806), but these arguments are ignored because the function does not take any parameters.

// Finally, correct the code to fix the problem
// =============> write your new code here
//function getLastDigit(number) {
 // return number.toString().slice(-1);
//}


//console.log(`The last digit of 42 is ${getLastDigit(42)}`);
//console.log(`The last digit of 105 is ${getLastDigit(105)}`);
//console.log(`The last digit of 806 is ${getLastDigit(806)}`);


// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
//Modified getLastDigit() to accept a parameter (number) instead of relying on the global num.
//Now, getLastDigit(42) correctly returns '2', getLastDigit(105) returns '5', and getLastDigit(806) returns '6'.
