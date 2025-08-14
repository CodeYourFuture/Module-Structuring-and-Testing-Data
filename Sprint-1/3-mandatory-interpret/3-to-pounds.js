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
// 2. ine lines 3-6, penceStringWithoutTrailingP is being declared to get rid of the "p" part of "399p" so that you end up with "399" ONLY.
// 3. Lines 8 paddedPenceNumberString adds "0" to the start of paddedPenceNumberString which is "399" with the aim of it have a total length of 3.
// 4. Lines 9-12, pound is being declared, the value of it aims to extract the "full pounds part" considering 1 pound = 1-- pence.
// 4. Lines 14-16, extract the "pence part" fraction
// 5. Line 18 prints out the sum in pounds and pense.

