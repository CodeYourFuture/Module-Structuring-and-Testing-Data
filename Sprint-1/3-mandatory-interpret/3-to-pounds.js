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
/*
3-6. It is taking the vaule from pencestring and using substring to return part of the string, by -1 so from the end resualting in "399"
8. It is now adding "0" infront of vaule if the vaule is under 3 characters in size.
9-12. Using the substring function to reduce the size of the vaule to just 2 characters.
14-16. Taking the value from paddedPenceNumberString and this time with substring, only showing the last 2 characters in teh value.
       Then with using .padEnd it ensures that 2 characters are shown with 0 being there is nothing is there.
18. howing the resualt of the code starting with a "£" then the value of "pounds" then a "." and lastly value of "pence"
*/
