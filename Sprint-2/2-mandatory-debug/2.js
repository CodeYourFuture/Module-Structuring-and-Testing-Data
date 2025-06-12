// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here

// I can see from the function call that num is defined as a fixed number, which is 103.
// So the function num.toString() will use 103 for num always, no matter what number is entered as a parameter. 

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction

// Done.
// It does exactly what I expected. Whatever number you pass into getLastDigit as an argument, it still returns 3.

// =============> write the output here

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
The last digit of 42 is 3

console.log(`The last digit of 105 is ${getLastDigit(105)}`);
The last digit of 105 is 3

console.log(`The last digit of 806 is ${getLastDigit(806)}`);
The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here

// The function getLastDigit does not accept any arguments.
// A global variable, num, is already set to 103. 
// So the function always uses this value instead of the numbers passed in.
// Here's what happens:
103.toString() = "103"
"103".slice(-1) = "3"


// Finally, correct the code to fix the problem

// We need to assign a parameter to the function getLastDigit(), which we will call "number".
// Inside the function, it converts "number" to a string and gets the last character using .slice(-1).

// =============> write your new code here

function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);      // "2"
console.log(`The last digit of 105 is ${getLastDigit(105)}`);    // "5"
console.log(`The last digit of 806 is ${getLastDigit(806)}`);    // "6"

//Output

The last digit of 42 is 2
The last digit of 105 is 5
The last digit of 806 is 6

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// The function getLastDigit doesn't accept any parameters; it works with the variable num, which is fixed as 103.
// No matter what number is entered into getLastDigit, it ignores it and returns the last digit of 103 every time.
