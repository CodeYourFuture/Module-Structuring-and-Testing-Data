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
// line 1 is declaring a const variable and storing its value as 399p string where p is included in the amount text.
/* line 3 is  is removing the trailing p from the string 399p.
//penceString.length for "399p" is 4.
penceString.length - 1 is 3.
substring(0, 3) takes characters at indexes 0, 1, and 2 ---> 399.
 we removed p, so that we can add padding and splitting.
*/
// line 8, we added padding to ensure the pence number is atleast 3 digits long by adding leading zeros if needed.Having at least 3 digits makes it easy to split into:pounds → all but the last 2 digit. pence → the last 2 digits
/* line 9 Extract the pounds part from the padded string.

paddedPenceNumberString.length is 3.

length - 2 is 1.

substring(0, 1) → takes index 0 only → "3".

The last 2 digits represent pence.

Everything before that represents pounds.
So we take from the start (0) up to (but not including) the position where the last 2 digits begin.
/* line 14 Extract the pence part and make sure it’s always 2 digits.

length is 3.

length - 2 is 1.

substring(1) → takes from index 1 to the end → "99".

Then padEnd(2, "0"):

Ensures the pence string is always 2 characters long.

For "99" → stays "99".

Pence must always be shown as two digits (like £3.05, not £3.5).
// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
