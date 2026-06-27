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
//  const penceString = "399p": initialises a string variable with the value "399p"
// Rationale: This serves as the raw input data for the program,
// simulating a price format you might get from a user input or a database.

//  const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
// //  What it does: Extracts a portion of penceString starting from index 0 up to (but not including) the very last character.
// It stores "399" in penceStringWithoutTrailingP.
// Rationale: To do any math or structural formatting,
// the trailing "p" needs to be stripped away so the program is left with just the numeric characters.

//  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// What it does: Pads the start of the string with "0"s until the string reaches a total length of 3 characters. 
// For "399", it stays "399". However, if the input was "5p", this step would turn "5" into "005".
// Rationale: This is a safety measure for small amounts (under £1.00). 
// By forcing a minimum length of 3 characters, it ensures there are always enough digits to separate into at least one digit for pounds and two digits for pence.

//  const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
// What it does: Grabs everything from the start of the padded string up to the final 2 characters. 
// For "399", it extracts "3". For a padded string like "005", it would extract "0".
// Rationale: Since 100 pence equals 1 pound, the last two digits of any pence value will always represent the change, and everything before those last two digits represents the whole pounds.

//  const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
// What it does: This does two things. First, .substring(...) extracts exactly the last 2 characters of the string (e.g., "99" from "399"). 
// Then, .padEnd(2, "0") ensures it is 2 characters long by adding zeros to the right (though because of the previous steps, it's already 2 characters long here).
// Rationale: This isolates the final two digits to represent the pence column cleanly, ensuring it always displays as a standard two-digit currency format (like .05 or .99).

//  console.log(\£${pounds}.${pence}`);`
// What it does: Uses a template literal to combine the pound sign (£), the pounds variable, a decimal point (.), and the pence variable into one string, printing £3.99 to the console.
// Rationale: This is the final presentation layer, formatting the separated data pieces into a human-readable UK currency format.
