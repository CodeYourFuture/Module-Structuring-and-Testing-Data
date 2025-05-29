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

// ANSWER


// **lines 3-6:**
// removes the p from the end of the string
// => penceStringWithoutTrailingP = "399"
// if we're going to use the string indices as an indication of where the £££ and p are stored, we can't have a character that isn't part of the number changing the length of the string

// const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);
// .substring(a,b) extracts characters from a string, starting at position a and ending at position b

// **line 8:**
//adds 0s at the beginning of penceStringWithoutTrailingP until its length is 3 => paddedPenceNumberString doesn't get changed and remains = 399, because its length is already 3
// If the length were smaller (e.g. 30 would have length 2 and would be just enough to buy a freddo these days), we'd need to add an extra 0 at the beginning so the next line can read out that we have 0 whole pounds

// **lines 9-12:**
// .substring(a,b) extracts the part of a string between indices a and b, and returns the substring
// => pounds = "3"
// now we have a variable that holds the number of whole pounds in it

// **lines 14-17**
// substring again
// => pence = "99"

// **line 18**
// logs £3.99
// a human readable and different representation of the amount of pence


