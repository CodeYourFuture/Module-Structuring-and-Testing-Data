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

/**
 * 1. const penceString = "399p";
Initialises a constant string variable with the value "399p". This represents a price in pence, with the "p" suffix indicating it's in pence (like writing "399p" on a price tag that can be found in shops in the UK).

 * 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
 * Removes the trailing "p" character by taking a substring from index 0 to the second-last character. With "399p":

 * penceString.length = 4
 * penceString.length - 1 = 3
 * Takes characters from index 0 to 2 (inclusive) showing "399"

 * 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
Pads the number string from the left with zeros to ensure it's at least 3 characters long. This handles cases where the pence value might be less than 100 (e.g., "5p" would become "005").

 * "399" is already 3 characters, so it remains "399"

 * 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
 * Extracts the pounds part by taking all characters except the last two (the pence part). "399":

 * paddedPenceNumberString.length = 3
 * paddedPenceNumberString.length - 2 = 1

 * Takes characters from index 0 to 0 (inclusive) "3"

 * 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
 * Extracts the pence part (last two characters) and ensures it's exactly 2 digits by padding from the right with zeros if needed.
 * paddedPenceNumberString.substring(1). Takes from index 1 to end "99"
 * Since "99" is already 2 characters, padEnd(2, "0") leaves it as "99"

 * 6. console.log(£${pounds}.${pence});
 * Outputs the formatted price in pounds, combining:

 * £ symbol

 * pounds value ("3")
 * decimal point
 * pence value ("99")
 * Result: "£3.99"

 * Purpose/Rationale
 * 
 * The program converts a pence-based price string (like "399p") into a properly formatted pounds and pence representation (£3.99). The padding operations ensure that:

 * Small pence values (like "5p") are correctly formatted as £0.05
 * The pence portion always shows two digits (e.g., "99" not "9")
 * The pounds part correctly handles amounts under £1 (shows as "0")
 */
