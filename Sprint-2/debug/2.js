// Predict and explain first...

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

____________________________________SOLUTION_____________________________________________

//  The function getLastDigit does not take any arguments, yet it attempts to operate on a global variable num.
//  The function converts the value of num (103) into a string, extracts the last character using .slice(-1), and returns it.

console.log(`The last digit of 42 is ${getLastDigit(42)}`);

/*  The code calls getLastDigit with arguments (e.g., 42, 105, 806), but the function definition does not include parameters to accept these values.
The function will always operate on the global variable num (which is 103) regardless of the arguments passed to it.

Incorrect Outputs:

The global variable num is never updated or replaced by the arguments provided in the function calls.
Therefore, the output for all three console.log statements will be:
*/    
//      The last digit of 42 is 3
//      The last digit of 105 is 3
//      The last digit of 806 is 3
//   This happens because getLastDigit always uses the global variable num (value 103) to compute the result.


//                            The    Corrected Code:

function getLastDigit(number) {
  return number.toString().slice(-1); // Accepts a parameter and calculates the last digit
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`); // Passes 42 to the function
console.log(`The last digit of 105 is ${getLastDigit(105)}`); // Passes 105 to the function
console.log(`The last digit of 806 is ${getLastDigit(806)}`); // Passes 806 to the function

//                        The program will now correctly output:
/*
The last digit of 42 is 2
The last digit of 105 is 5
The last digit of 806 is 6
*/