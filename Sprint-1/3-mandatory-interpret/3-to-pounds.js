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
// 1. const penceString = "399p": initializes a string variable with the value "399p"
// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1): creates a copy of the penceString and method substring() removes the last character 'p', using the length of the original string minus 1 as the endpoint
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): ensures that the string has at least 3 characters, if not - adds zeros to the start of the string until it reaches that length. Method padStart() is used for this purpose - padStart(targetLength, padString), where targetLength is 3 and padString is "0". If string is already 3 or more characters long, no symbol is added.
// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2): extracts the pounds from the paddedPenceNumberString by taking all characters except the last two, using substring() method with the endpoint set to the length of the string minus 2
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): extracts the last two characters with method substring() from the paddedPenceNumberString to represent the pence (starting index set to the length of the string minus 2). Then, padEnd(2, "0") ensures that the resulting string has at least 2 characters, adding a trailing zero if necessary.
// 6. console.log(`£${pounds}.${pence}`): outputs the formatted amount of money/price in pounds and pence to the console, using template literals for nice readable view (it allowed combining the pounds and pence with the appropriate currency symbol and decimal point.
