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
/* Line 1 assigns a value of 399p to variable penceString.
Line 3 and 4 creates a portion of the string 399p where 0 = 3 as the first character and
penceString.length as a second argument that removes the last (1) character from the length of 399p, creating 399.
In other words, it removes the p. 
Line 8 used the padStart method, a known JavaScript method for strings, that would add characters
at the beginning of the string to produce the desired length. The character specified here is 0,
which effectively separates Pounds and pence.
Lines 9-11 then assigns the value for Pounds to the substring extracted above by removing the last 2 pence characters.
Lines 14-17 then takes the paddedPenceNumberString and creates a substring which extracts the last 2 characters (2)
so that they represent the pence value and padEnd ensures the extracted portion has 2 characters, 
adding a 0 to the front when there is only 1 character.
Line 18 will return the values of pounds and pence as template literals, with the Pound symbol and . separator.
*/ 


// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
