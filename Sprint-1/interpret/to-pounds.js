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

// 1. const penceString = "399p": 
//    Initialises a string variable with the value "399p" representing the price in pence

// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1):
//    Removes the 'p' at the end of the string by taking a substring from index 0 to length-1
//    "399p" becomes "399"

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"):
//    Ensures the string is at least 3 digits long by padding with zeros at the start
//    "399" stays as "399", but "45" would become "045"

// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2):
//    Extracts the pounds portion by taking all digits except the last 2
//    From "399" gets "3" (the pounds)

// 5. const pence = paddedPenceNumberString.substring(...).padEnd(2, "0"):
//    Gets the last 2 digits for pence and ensures there are 2 decimal places
//    From "399" gets "99" (the pence)

// 6. console.log(`£${pounds}.${pence}`):
//    Formats and prints the final price with pounds and pence in standard currency format
//    Outputs "£3.99"
