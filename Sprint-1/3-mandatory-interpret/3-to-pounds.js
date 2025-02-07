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
// Rationale: The string represents a price in pence (e.g., "399p" = 399 pence).
//  This will later be converted into a formatted string in pounds and pence (e.g., £3.99)

// const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
// Purpose: This removes the last character ("p") from the penceString.
// Rationale: Since the "p" suffix indicates pence and isn't needed for the conversion, this line extracts only the numeric part of the string ("399").
// Example Output: "399"

// const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// Purpose: Ensures the numeric string is at least 3 characters long by padding it with leading zeros if necessary.
// Rationale: This guarantees that the string always has enough digits to represent pounds and pence correctly.
// If the string has fewer than 3 digits (e.g., "5" or "75"), leading zeros will be added to ensure it has at least 3 digits.
// This is important because the first part will represent the pounds, and the last two digits will represent the pence.
// Example Output: "399" (no change) or "005" for "5".


// const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
// Purpose: Extracts the pounds portion from the padded string.
// Rationale: The last two digits of the padded string represent the pence, so everything before those two digits represents the pounds.
// Example Output: For "399", the pounds portion is "3".


// const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
// Purpose: Extracts the last two digits from the padded string and ensures they are always 2 characters long by padding with zeros if needed.
// Rationale: This ensures the pence value is consistently two digits.
// If there are fewer than 2 digits (e.g., "5" becomes "50"), it pads the value to ensure a standard format.
// Example Output: For "399", the pence portion is "99".


// console.log(\£${pounds}.${pence}`);`
// Purpose: Logs the formatted string representing the price in pounds and pence.
// Rationale: This combines the extracted pounds and pence values into a human-readable format (£pounds.pence), following standard UK currency formatting.
// Example Output: For "399p", it logs "£3.99".



