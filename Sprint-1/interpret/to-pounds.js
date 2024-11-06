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

//2.IN the next line we remove the "p" character at the ned of string by using substring method. The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.Syntax: string.substring(start, end)

//3. Next step we make sure that the string is 3 digitd long by using padding.However nothing will change here as we already have 3 digits. 

//4 we calculate the pound by removing 2 digits at the end 

//th next line we get the last to digit and and with padEnd we make sure there is always 2 digits 