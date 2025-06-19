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

/*2. const penceStringWithoutTrailingP = penceString.substring( 0,penceString.length - 1);
this line removes the trailing "p" by using .substring() string method. This method removes the last character
of the string which is "p" and the result would be "699p" will become "699"*/

/*3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
.padStart ensures the string is at least 3 characters long by padding to the left  with "0", so if the value 6 it becomes 006.*/

/* 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
this line extracts all but the last two characters to get the whole of the pound amount. for example "699" becomes "6"*/

/*5. const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
  this line takes the last two digits of the pence and ensure it is always two digits long.
  .padEnd ensures that the pence value always consist of two digits if the value 6 it be "06"*/

/* 6. console.log(`£${pounds}.${pence}`);
this line outputs the final result as £3.99 in currency format.
it uses template literals to output the pounds and pence values.*/