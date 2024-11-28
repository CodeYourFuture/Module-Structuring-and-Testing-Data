const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);

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

//2. Line 2 removes the trailing "p" from penceString. Using substring(0, penceString.length - 1) takes all characters from the start up to but not including the last character, resulting in just the numeric part of the price, "399".

//3.Line 5 was tricky to understand, according to GPT Pads penceStringWithoutTrailingP to ensure it has at least 3 characters, adding "0"s at the start if necessary. If penceStringWithoutTrailingP is less than 3 digits (like "9" or "99"), padStart will add leading zeros so it has a minimum length of 3 characters. For example, "9" becomes "009", "99" becomes "099", and "399" stays "399"

//4.Line 6 pounds varibale Extracts the pound section by taking all but the last two characters of paddedPenceNumberString. This isolates the whole pounds, as the last two characters represent the pence.

//5. Line 11 pence variable Extracts the last two characters of paddedPenceNumberString to get the pence portion. If paddedPenceNumberString has fewer than two digits for pence (like "9"), padEnd will add a "0" to ensure two digits for the pence. This step standardizes the pence format to always have two digits.

//6. Line 15 interpolates the pounds and pence portions into a string formatted as £<pounds>.<pence>. This outputs the price in pounds and pence