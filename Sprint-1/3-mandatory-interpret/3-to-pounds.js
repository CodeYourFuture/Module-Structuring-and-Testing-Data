const penceString = "9p";

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

// 3. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
// removes the trailing p so that there's a clean number format to work with.

// 8. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// pad the start so that there's always a character (0) in the pound's place, and the 10th and 100th place of the
// fractional part (pence). E.g. for 9 pence, the pre-padded number would be "9", by padding it with 0, you get
// 009, which can easily be formatted as £0.09.

// 9. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
// final two characters will always represent pence, be it "09" for 9 pence, or "90" for 90 pence
// so the pound part will be anything preceding those two characters.

// 14. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
// I guess, this is trying to ensure that pence always amounts to at least 2 digits, but it is unnecessary
// as you're always taking the last two digits and padStart in line 8 ensures that the string always has at least 3 characters.

// 18. console.log(`£${pounds}.${pence}`);
// this is just adding a pound symbol at the start and joining the pound and pence parts captured earlier with a dot.
