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

/*

1. const penceString = "399p";
Initializes a string variable with the value "399p", representing a price in pence with a trailing "p".

2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
Removes the trailing "p" character from the string, leaving only the numeric part (e.g., "399").

3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
Pads the numeric string on the left with zeros so it is at least 3 characters long (e.g., "399" stays "399", but "9" would become "009"). This ensures consistent formatting for the next steps.

4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
Extracts all but the last two characters to represent the pounds part (e.g., from "399", it takes "3").

5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
Extracts the last two characters for the pence part (e.g., from "399", it takes "99"). If there are fewer than two characters, it pads the result on the right with zeros.

c6. onsole.log(£${pounds}.${pence});
Outputs the formatted price in pounds and pence (e.g., "£3.99").


*/

