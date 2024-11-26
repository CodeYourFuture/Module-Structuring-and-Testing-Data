const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"


// const penceString = "399p";:

// Initializes a string variable with the value "399p".
// This represents a monetary amount in pence, with the trailing p indicating pence.
// const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);:

// Removes the trailing "p" from the string.
// Uses the substring() method to extract all characters from the start (0) to the second-to-last character (penceString.length - 1).
// Result: "399".
// const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");:

// Ensures the pence string has at least three characters by padding the start with 0 if necessary.
// Example:
// If penceStringWithoutTrailingP were "5", this would make it "005".
// If it's "399", it remains "399" as it already has three characters.
// Result: "399".
// const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);:

// Extracts the pound portion from the padded pence string.
// Takes all characters from the start (0) up to the third-to-last character (paddedPenceNumberString.length - 2).
// Example:
// If paddedPenceNumberString is "399", this extracts "3" (the pound portion).
// Result: "3".
// const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");:

// Extracts the pence portion from the padded pence string.
// Takes the last two characters (paddedPenceNumberString.length - 2 onward).
// If the extracted string is less than two characters, padEnd(2, "0") ensures it has exactly two characters by appending 0 if needed.
// Example:
// If paddedPenceNumberString is "399", this extracts "99".
// If it were "005", this extracts "05".
// Result: "99".
// console.log(£${pounds}.${pence});:

// Constructs a formatted string representing the amount in pounds and pence.
// Uses template literals to combine the pounds and pence values into the format £X.XX.
// Example:
// For pounds = "3" and pence = "99", the output is "£3.99".
// Purpose of the Program:
// The program converts a price given as a string in pence (e.g., "399p") into a formatted string representing pounds and pence (e.g., "£3.99"). This is useful for presenting prices in a human-readable currency format.
