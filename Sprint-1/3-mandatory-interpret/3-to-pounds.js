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
// 1. const penceString = "399p": initialises a string variable with the value "399p".We need to store this value to work with it in the following steps.
//3. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);-This line removes the  "p" from the penceString using the substring method.
//We want to work only with the numeric part of the string, so we remove the "p" character at the end of the string ("399" from "399p").
//8. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");-This line ensures that the string representing pence is at least 3 characters long, padding it with leading zeros if necessary.
// This step ensures that even if the number of pence is less than 100, we can still treat it as having 2 digits, like "009".
//9. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);-This line extracts the pounds part from the paddedPenceNumberString. It takes the first part of the string before the last two digits, which represent the pence.
// We want to separate the pounds from the pence. Since we have padded the pence number to 3 digits , this operation takes everything except the last two digits,which represent the pence.
//14. const pence = paddedPenceNumberString
 // .substring(paddedPenceNumberString.length - 2)
// .padEnd(2, "0");- This line extracts the pence part from the string and ensures it is exactly two digits long by adding  zeros if needed.
// The substring(paddedPenceNumberString.length - 2) extracts the last two digits  from the padded string. Then, .padEnd(2, "0") ensures that if the number of pence is less than 10 it will be padded to two digits.
//18. console.log(`£${pounds}.${pence}`);-This line formats the output into a readable string representing pounds and pence, then prints it to the console.
// We now have two parts of the value—pounds and pence—and we need to combine them into a string that represents the value in a human-readable format. This line creates a string in the format £X.XX where X is the respective number of pounds and pence, and prints it.