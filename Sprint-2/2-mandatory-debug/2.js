// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
/* All the three lines will output the last digits of 103, which is "3". So the output will be:
The last digit of 42 is 3
The last digit of 105 is 3
The last digit of 806 is 3

This is because the function getLastDigit() does not use the number passed into it.
Instead, it is always uses the global variable 'num', which is 103. therefore, every call returns the last digit of 103. */

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here

/* The output will be:
The last digit of 42 is 3
The last digit of 105 is 3
The last digit of 806 is 3 
*/


// Explain why the output is the way it is
// =============> write your explanation here

/* The function getLastDigit() is supposed to return the last digit of the number passed to it by the user. However, the function does not accept any parameters.
Even though the function is called with values like getLastDigit(42), getLastDigit(105), and getLastDigit(806), the argument is ignored because the function definition does not include a parameter. 
Instead, the function always uses the global variable 'num', which is 103.
The last digit of 103 is "3", so every call returns "3" regardless of the number passed in. */


// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);


// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

/* getLastDigit is not working properly because it does not accept any parameters in its definition. 
As a result, it always uses the global variable 'num', which is set to 103, instead of using the number passed to it when called.
The correct code now includes a parameter 'number' in the function definition of getLastDigit(). 
This allows the function to accept the number passed to it when called.

Correct Output:
The last digit of 42 is 2
The last digit of 105 is 5
The last digit of 806 is 6
 */