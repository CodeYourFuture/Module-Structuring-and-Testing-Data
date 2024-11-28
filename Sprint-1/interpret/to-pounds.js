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

// 2.const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
// Removes the "p" at the end of penceString. The substring method takes a start index of 0 and an end index of penceString.length - 1, which excludes the last character.

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// Ensures penceStringWithoutTrailingP has at least three characters by padding it with leading zeros if necessary
// The padStart method takes two arguments, The first argument (3) is the target length for the string.
// The second argument ("0") specifies the character to add to the beginning if padding is needed.

// 4.const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2);
// Variable pounds, will store the pound portion of the price and paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2):
// is The substring method extracts a portion of the string by specifying a start index and an end index which is (o, -2), By starting from index 0 and ending two characters from the end, we’re effectively capturing all characters except last two characters.

// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
// variable pence will store the pence portion of the price, which we’re extracting from paddedPenceNumberString.
// paddedPenceNumberString.substring(paddedPenceNumberString.length - 2):
// Here, we’re using the substring method to capture the last two characters of paddedPenceNumberString.
// .padEnd(2, "0"): ensures that the pence value always has two characters:
// The first argument (2) is the target length of the string. If pence has only one character like "9", padEnd will make it two characters long like "09".
// The second argument ("0") specifies the character to add at the end if padding is needed.

// 6. console.log(`£${pounds}.${pence}`);
// This function use template literal and it is responsible for formatting and outputting the final price in pounds and pence
