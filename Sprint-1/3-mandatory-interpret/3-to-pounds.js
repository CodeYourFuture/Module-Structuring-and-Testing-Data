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
console.log(paddedPenceNumberString,"line8"); //del
console.log(pounds,"line9"); //del
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);
console.log(pounds,"line14"); //del
// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

//############

// Line 1 is declaration a new variable call penceString as string.
// line 3 to 6 is declaration a new variable penceStringWithoutTrailingP using method substring to extract a new string from the string in penceString const fist index(0) and second number from the last(-1) index.
// line 8 will not change anything because the string is 3 number and padStar will add 0 if the number more bigger the number of the var.
// line 9 to 12 will git a new var call pounds that will extract the fist index form the left and will remove three indexes from the right.
// line 14 to 16 start with creating a new var call pence and will convert the string to length to extract number 3 by use method subStart from index 2 from the left and last index in the right.