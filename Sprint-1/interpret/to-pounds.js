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
// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length -1)); : Creates a new variable penceStringWithoutTrailingP, which uses the substring() method to extract all characters from penceString except for the last character (p)
// 3  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); : The padStart(3, "0") method is used to ensure that the string representing the pence value is at least 3 characters long
// 4  const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2); : Extracts the pounds part from the padded pence number string
// 5  const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"); : Extracts the last two characters from paddedPenceNumberString to get the pence portion
// 6  console.log(`£${pounds}.${pence}`); : Outputs the final string to the console to create a string in the format of £{pounds}.{pence}
