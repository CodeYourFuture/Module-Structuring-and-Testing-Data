const penceString = "399p";

// substring() method returns a portion of a string
// In the variable below, it returns "399" and penceString.length - 1 removes the last character ("p")
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

// Although pasStart() method does not seem necessary here, but this method gives a padding to a string from start
// so the "399" has a given length of 3
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

// substring() method returns a portion of a string
// In this case, it return only "3" which is the Pound
// and 'paddedPenceNumberString.length - 2' removes "99" which represents the pence
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

// substring() method removes "3" from "399" and returns "99";
// padEnd() method pads the "99" and the padding applied is from the end of this string.
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2);


// In the log, backticks are used to output template literals ${pounds} and ${pence} with added '£' sign.
// console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

// We don't need .padEnd(2, "0");
// However, using this function will simplify and work for all types of pence
function toPounds(pence) {
  return "£" + Number(pence.slice(0, -1) / 100).toFixed(2);
}

console.log(toPounds("9p"));  // £0.09
