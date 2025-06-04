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
  .substring(paddedPenceNumberString.length - 2);

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

/* To begin, we can start with
 1. const penceString = "399p": initialises a string variable with the value "399p"

 2.
We need to work with just the number part, so we remove the last character ("p").
substring(0, penceString.length - 1) means:

Start at index 0 (first character).

End before the last character (length - 1).

Result: "399p" → "399"

3.
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); 
Now, we make sure the number is 3 digits long by adding zeros to the front if needed.

padStart(3, "0") means: "If the string is shorter than 3 characters, add "0" at the start until it’s 3 digits."

Example:

"399" → stays "399" (already 3 digits).

"5" → becomes "005".

This is important because we’ll split this into pounds and pence next, and we need consistent formatting.

4.

const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
Pounds are the bigger part of the money. Since 100 pence = 1 pound:

For "399" pence, the pounds are "3" (because 399p = £3.99).

How it works:

substring(0, length - 2) takes from the start up to (but not including) the last 2 digits.

"399" (length 3) → 3 - 2 = 1 → takes index 0 to 1 (exclusive) → "3".


5.
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

  Pence are the last two digits of the number.

Steps:

substring(length - 2) takes the last 2 characters:

"399" → "99".

padEnd(2, "0") ensures we always have 2 digits (though it’s already 2 here).

Example: If somehow we had "5", it would become "50".

6.

console.log(`£${pounds}.${pence}`);

We combine everything into a proper currency format:

pounds = "3".

pence = "99".

Result: £3.99.*/

