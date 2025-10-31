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
// 3-6. initializes a constant string variable penceStringWithoutTrailingP which is penceString with the p removed from the end of the string
//  to give a plain number string
// 8. initializes a constant string variable paddedPenceNumberString, which pads "0"s at the start
// of penceStringWithoutTrailingP until it has length=3  the next parts don't delete any numbers accidentally
// 9-12. initializes a constant string variable pounds, which is the paddedPenceNumberString, with the last two digits
// subtracted(i.e. the pence value in the string)
// 14-16. initializes a constant string variable pence, which is the last two digits of paddedPenceNumberString,
// with "0" pads at the front of the string until it has length=2
// 18.calls the console.log function to display the pound-sign and then penceString converted into a pound-value
//
