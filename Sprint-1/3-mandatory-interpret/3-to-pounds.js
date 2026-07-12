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
1. const penceString = "399p": initialises a string variable with the value "399p"
2.
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);  the purpose of this is to take out the p.


3.
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
if it is shorter than 3 characters, the 0 will add in front of the number  ;  but 399 is already 3 numbers so we donot need to do anything.



4. const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);  the length of the string is 3 , after -2 , it will become 1. The const pounds will take out 3 and it will become 3.


5. const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

  It will take out the number from the end to 1 ; so it will have 99. 

6.console.log(`£${pounds}.${pence}`);  

Finally it will put the pounds and the pence into the template and print it out. The result will be £${3}.${99} ;