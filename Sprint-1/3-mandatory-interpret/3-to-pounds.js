const penceString = "399p";
// 1. Initializes a string variable with the value "399p" representing the price in pence with a trailing 'p'.

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
// 2. Removes the trailing 'p' by taking a substring from index 0 up to (but not including) the last character.
//    Result: "399"

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// 3. Ensures the string is at least 3 characters long by padding with leading zeros if needed.
//    In this case, "399" is already 3 characters, so it remains "399".

const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
// 4. Extracts the pounds part by taking all characters except the last two.
//    For "399", this is "3" (the hundreds place).

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
// 5. Extracts the last two characters as the pence part.
//    For "399", this is "99".
//    Then pads the string on the right with zeros if it’s shorter than 2 characters (not needed here).

console.log(`£${pounds}.${pence}`);
// 6. Prints the formatted price string with a £ sign, pounds, and pence separated by a dot.
//    Output: "£3.99"
