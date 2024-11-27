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
/*
const penceString = "399p"; - Declares a constant variable penceString and assigns it the string value "399p"
const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1); - Uses the substring() method to extract a portion of the penceString
0: Starts from the beginning of the string.
penceString.length - 1: Ends one character before the end of the string, effectively removing the trailing "p".

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
Uses the padStart() method to add leading zeros to the penceStringWithoutTrailingP.
3: Specifies the desired total length of the string after padding.
"0": The character to use for padding.
This ensures that the number has at least 3 digits

const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2);
Extracts the pounds part from the padded string.
0: Starts from the beginning of the padded string.
paddedPenceNumberString.length - 2: Ends two characters before the end, capturing the pounds part.

const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
Extracts the pence part from the padded string.
paddedPenceNumberString.length - 2: Starts from the last two characters of the padded string.
Uses padEnd() to add trailing zeros to the pence part, ensuring it's always a two-digit number.
2: Specifies the desired total length of the string after padding.
"0": The character to use for padding.

console.log(`£${pounds}.${pence}`);
Formats and prints the final output in the format "£x.yy", where "x" is the number of pounds and "yy" is the number of pence.

*/
// Try and describe the purpose / rationale behind each step
/*
Removing the trailing "p":
This step ensures that we're working with a pure number string. The "p" is removed to avoid errors during numerical operations.

Padding with leading zeros:
This step guarantees that the pence amount has at least two digits. This is crucial for proper formatting, especially when the pence amount is less than 10.

Extracting pounds and pence:
The pounds variable extracts the first digits (representing pounds) from the padded string.
The pence variable extracts the last two digits (representing pence) from the padded string and pads it with trailing zeros if necessary.

Formatting the output:
The final output is formatted using a template literal, ensuring that the pound symbol (£) is included and the pounds and pence are separated by a decimal point.
*/

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
