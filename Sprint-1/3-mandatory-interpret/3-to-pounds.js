const penceString = "399p";
// This line declares a constant variable named `penceString` and assigns it the value "399p".
// This string represents a price in pence.

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
// This removes the trailing "p" from the string, leaving only the numeric value.

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// Ensures the number has at least 3 digits by adding leading zeros if necessary.

const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
// Extracts the pounds part of the value.

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
// Extracts the last two digits to represent the pence value.

console.log(`£${pounds}.${pence}`);
// This line constructs a string in the format "£X.XX" where X represents the pounds and pence values, and then prints it to the console.
// Prints the formatted price such as "£3.99".

// This program takes a string representing a price in pence
// It then removes the trailing "p" character, pads the number with leading
// zeros to ensure it has at least 3 digits, and then separates the pounds and pence parts of the number.

// The program then builds up a string representing the price in pounds
// and pence format (e.g., "£3.99") by concatenating the pounds and pence parts together with a "£" symbol and a decimal point. The final output is printed to the console.

// This program takes a string representing a price in pence (e.g., "399p") and converts it into a formatted string representing the price in pounds and pence (e.g., "£3.99").
// by concatenating the pounds and pence parts together with a "£" symbol and a decimal point. The final output is printed to the console.

// You need to do a step-by-step breakdown of each line in this program
// a) How many function calls are there in this file? Write down all the lines where a function call is made
// 1. penceString.substring(0, penceString.length - 1) - line 3
// 2. penceStringWithoutTrailingP.padStart(3, "0") - line 5
// 3. paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2) - line 6
// 4. paddedPenceNumberString.substring(paddedPenceNumberString.length - 2) - line 9
// 5. padEnd(2, "0") - line 9
// 6. console.log(`£${pounds}.${pence}`) - line 11

// Try and describe the purpose / rationale behind each step
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// c) Identify all the lines that are variable reassignment statements
// d) Identify all the lines that are variable declarations
// e) Describe what the expression penceString.substring(0, penceString.length - 1) is doing - what is the purpose of this expression?

// a) How many function calls are there in this file?

// 1. penceString.substring(0, penceString.length - 1)
// Removes the trailing "p" from `penceString` by taking a substring that excludes the last character.

// 2. penceStringWithoutTrailingP.padStart(3, "0")
// Ensures the string has at least 3 digits by adding leading zeros if needed.

// 3. paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2)
// Extracts the pounds part by taking all digits except the last two.

// 4. paddedPenceNumberString.substring(paddedPenceNumberString.length - 2)
// Extracts the last two digits to represent the pence value.

// 5. padEnd(2, "0")
// Ensures the pence value always has two digits by adding trailing zeros if necessary.

// 6. console.log(`£${pounds}.${pence}`)
// Prints the final formatted price in pounds and pence to the console.
