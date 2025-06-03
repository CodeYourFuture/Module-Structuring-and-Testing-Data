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
// 1. const penceString = "399p": initializes  a string variable with the value "399p"
//This value represents a monetary amount in pence, with a trailing "p" to indicate "pence" (e.g., 399 pence).
// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
//This line removes the last character ("p") from the penceString.
//It uses .substring() to extract all characters from index 0 up to (but not including) the final character.
//Purpose: To isolate the numeric portion of the string so that calculations can be performed.
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//This line ensures the string has at least 3 characters by adding "0" to the start if it's too short.
//Rationale: This guarantees that the number has enough digits to split correctly into pounds and pence, even if the original number is small (e.g., "5p" becomes "005").
// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
//This line extracts the pounds part by slicing the string from the beginning up to the last 2 characters.
// Rationale: In UK currency, the last two digits represent pence, and the digits before that represent pounds.
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
// This line extracts the last 2 characters as the pence part.
//If for any reason it's shorter than 2 digits, it adds a "0" to the end to ensure the format is correct.
// Purpose: Guarantees a consistent two-digit pence value.
// 6. console.log(\£${pounds}.${pence}`);`
// This line constructs and prints the final price string in pounds and pence format, using template literals.
// Rationale: This is the output the user will see, displaying the price in standard British currency format (e.g., £3.99).




