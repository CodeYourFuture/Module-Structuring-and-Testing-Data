const penceString = "000399p";

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
// 2. const penceStringWithoutTrailingP takes the penceString and creates a new sub string from it by removing the last character, it starts at the beginning of the penceString value and then takes the length of the penceString value minus 1.
// 3. const paddedPenceNumberString addeds three leading zeros to the penceStringWithoutTrailingP, if it is less than 3 characters long. This ensures that we always have a string of at least 3 characters to convert to pounds and pence.
// 4. const pounds takes the paddedPenceNumberString and creates a substring from it that starts from the beginning and stops 2 characters short of the end, it does this by taking in the arguments 0 for start and paddedPenceNumberString.length - 2 for end given 000399 we are left with 0003.
// 5. const pence takes the paddedPenceNumberString and creates a substring that starts 2 characters from the end (uses arg paddedPenceNumberString.length - 2 this takes the length of the value less two characters) and then adds padding of two leading zeros at the end.
// 6. console.log lets us print to the console. in this case it prints the string "£" followed by the pounds value, a dot, and then the pence value. The result is a formatted string representing the price in pounds and pence.
// The final output will be "£3.99" for the input "399p"