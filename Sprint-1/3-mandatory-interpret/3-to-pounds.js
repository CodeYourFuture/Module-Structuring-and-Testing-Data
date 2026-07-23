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
// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1): this removes the last character of the string (the "p"), leaving just the digits "399".
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): this pads the string with leading zeros until it is at least 3 characters long. Since "399" is already 3 characters, it stays "399". This step matters for smaller pence values, e.g. "9p" would become "009", ensuring there are always at least 2 digits left for pence.
// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2): this takes all characters except the last 2, giving the pounds part of the amount. For "399", this gives "3".
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): this takes the last 2 characters of the padded string (the pence part), then pads it with trailing zeros if it's shorter than 2 characters. For "399", this gives "99".
// 6. console.log(£${pounds}.${pence}): this combines the pounds and pence parts into a formatted price string, e.g. "£3.99".
