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
  .substring(paddedPenceNumberString.length - 2);

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialize a string variable with the value "399p"
// 2. In the code line 3 we remove the trailing 'p' from the string, resulting in "399"
// 3. In the code line 8 pads the string with leading zeros to ensure it has at least 3 digits
// , resulting in "399",the padStart method ensures that the string is at least 3 characters long, adding leading zeros if necessary.
// 4. In the code line 9 we extract the pounds part of the string by taking all but the last two characters, result will be "3".
// extracts the last two characters from the paddedPenceNumberString.
// It does this by calculating an index that's two positions from the end of the string and then using substring() to grab everything from that point to the string's end.
//  Since paddedPenceNumberString is always at least three characters long due to an earlier step, this reliably gets the two-digit pence value
// 6. In the code 18 we display the final result in the format "£3.99" using template literals.
