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


/*   Answer

2.const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1): This extracts the numeric part of the string by removing the last character ('p')
3.const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): This line ensures that the pence value is at least three digits long by padding it with leading zeros if necessary.
4.const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2): Extracts the pound amount from the formattedPenceString. The last two digits represent the pence, so this line takes all characters except the last two.
5.const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): Extracts the last two digits from formattedPenceString, which represent the pence amount. It uses substring to get the last two characters. The padEnd(2, "0") method is then used to ensure that this string has exactly two digits, padding with zeros if necessary.
6.console.log(`£${pounds}.${pence}`);:This line logs the final formatted string to the console. It uses template literals  to create a string that includes the pound amount and the pence amount, separated by a decimal point
*/
