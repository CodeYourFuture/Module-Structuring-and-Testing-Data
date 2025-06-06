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
// 2. In the code line 3 we remove the trailing 'p' from the string, resulting in "399"
// 3. In the code line 8 pads the string with leading zeros to ensure it has at least 3 digits, resulting in "399",the padStart method ensures that the string is at least 3 characters long, adding leading zeros if necessary.
// 4. In the code line 9 we extract the pounds part of the string by taking all but the last two characters, result will be "3".
// 5. In the code line 14 This line extracts the last two characters from paddedPenceNumberString, and then ensures that this extracted pence string is exactly two digits long by adding trailing zeros if necessary.
// 6. In the code 18 we display the final result in the format "£3.99" using template literals.