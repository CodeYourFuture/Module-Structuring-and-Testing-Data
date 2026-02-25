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
//
// 1. const penceString = "399p": initialises a string variable with the value "399p"

// This represents a price in pence (the "p" at the end indicates pence in UK pricing style).

/**
 * 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
 *
 * penceString.length is 4 (characters: '3', '9', '9', 'p').
 * penceString.length - 1 is 3.
 * penceString.substring(0, 3) extracts characters from index 0 up to but not including index 3.
 * Removes the trailing 'p' so the numeric part "399" can be processed.
 */

/**
 * 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
 *
 * penceStringWithoutTrailingP is "399".
 * "399".padStart(3, "0") ensures the string is at least 3 characters long, padding from the left with '0' if needed.
 * Since "399" is already length 3, it stays "399".
 * Objective: It normalizes in UK currrency such that the pence values like "99p" (which becomes "099") so pounds/pence splitting works correctly.
 */

/**
 * 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
 *
 * paddedPenceNumberString.length is 3.
 * paddedPenceNumberString.length - 2 is 1.
 * paddedPenceNumberString.substring(0, 1) extracts characters from index 0 to 1 exclusive → index 0 only → '3'.
 * For "399", pounds part is "3".
 * For "099" (if originally "99p"), pounds part would be "0".
 */

/**
 * 5. const pence = paddedPenceNumberString
 *
 * .substring(paddedPenceNumberString.length - 2)
 * .padEnd(2, "0");
 *
 * paddedPenceNumberString.length - 2 is 1.
 * paddedPenceNumberString.substring(1) extracts from index 1 to end → "99".
 * "99".padEnd(2, "0"): it ensures string is at least length 2, padding at end with '0' if needed.
 * In this case, it's already length 2, so stays "99".
 * If pence part were "5", it would become "50" (pence shown as 2 digits).
 */

/**
 * 6. console.log(`£${pounds}.${pence}`);
 *
 * Uses template literal to format output as £3.99.
 * Joins pounds and pence with a decimal point.
 */

