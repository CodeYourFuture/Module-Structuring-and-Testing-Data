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
//const penceString = "399p";
/*
Purpose: Initializes a string variable penceString with the value "399p".
Rationale: This string represents a price in pence, with the p character at the end indicating that the number is in pence.
const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);

Purpose: Removes the trailing p from penceString.
Rationale: The substring method extracts the portion of the string from index 0 to the second-to-last character (i.e., penceString.length - 1). 
This leaves us with "399" (as a string) which represents just the numeric part.
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

Purpose: Pads the numeric string with leading zeros to ensure it has a minimum length of 3 characters.
Rationale: The padStart method adds leading zeros if the string is shorter than 3 characters. For example, if the string were "99", it would become "099". 
This ensures that there are always enough digits for proper conversion into pounds and pence, particularly for values less than 100 pence.
const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);

Purpose: Extracts the pound portion from the padded pence string.
Rationale: By taking all characters except the last two, this line captures the pounds. 
For instance, if paddedPenceNumberString is "399", this would yield "3" as the pound portion. If the string were "099", it would result in an empty string (indicating £0).
const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");

Purpose: Extracts the last two characters of the padded pence string and ensures they are exactly 2 characters long.
Rationale: This uses the substring method to get the last two characters (representing pence). 
The padEnd method ensures that if the string is less than 2 characters, it pads it with zeros at the end. For example, if it were "9", this would result in "09".
console.log(£${pounds}.${pence});

Purpose: Outputs the formatted price in pounds and pence to the console.
Rationale: This line uses a template literal to format the final output as a string in the format of £X.YY, where X represents pounds and YY represents pence. 
For instance, with the given input, it will print £3.99.

*/