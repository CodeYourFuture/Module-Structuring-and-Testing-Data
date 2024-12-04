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
// Try and describe the purpose/rationale behind each step

// To begin, we can start with
   1. const penceString = "399p": //initialises a string variable with the value "399p"
   2. const penceStringWithoutTrailingP = penceString.substring(
    0,
    penceString.length - 1
  );  - //this line removes the last character p from the previous string 

  3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");// the line makes sure that the pence number has at least 3 digits. 

  4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2); //This line takes the pounds amount from the padded padded pence number string.

  5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"); //The line takes the pence amount and pads it with zeros if it is necessary.
 
  6. console. log(`£${pounds}.${pence}`); //This line allows us to print the formatted price to the console.
