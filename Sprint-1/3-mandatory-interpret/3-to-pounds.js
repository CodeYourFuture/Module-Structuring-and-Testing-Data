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



//SOLUTIONS HERE


// 1. const penceString = "399p": initialises a string variable with the value "399p"
const penceString = "399p";

// 2. Removes the trailing "p" by taking a substring from index 0 to the second-to-last character.
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

// 3. Pads the numeric string to ensure it's at least 3 digits (e.g., "7" becomes "007").
// This makes it easier to extract pounds and pence.
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

// 4. Extracts the pound portion by taking all but the last two digits.
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

// 5. Extracts the pence portion by taking the last two digits and padding with "0" if needed.
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

// 6. Logs the formatted result in the form £x.xx
console.log(`£${pounds}.${pence}`);

// --- QUESTIONS & DETAILED RESPONSES ---

// Q: What does the program do?
// A: This program takes a price in pence as a string with a "p" suffix (e.g., "399p")
//    and converts it to a properly formatted British pound value (e.g., £3.99).

// Q: Step-by-step breakdown of what each line does?
//
// 1. const penceString = "399p":
//    - Initializes the input value with a string representing the number of pence.
//
// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1):
//    - Removes the trailing 'p' to isolate the numeric part (e.g., "399p" → "399").
//
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"):
//    - Ensures the number is at least 3 characters long by padding with zeros if necessary.
//    - Useful for values like "7" (→ "007") to ensure valid pounds/pence splitting.
//
// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2):
//    - Extracts the pound portion by slicing off the last two digits.
//
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"):
//    - Extracts the pence portion (last 2 digits), padding if needed to ensure two-digit formatting.
//
// 6. console.log(`£${pounds}.${pence}`):
//    - Outputs the formatted currency in pounds and pence.

// Q: Will this code work for all values?
// A: It works for most valid pence strings (like "5p", "99p", "7p", "399p"). However:
//    - It does not validate whether the input ends with "p".
//    - It assumes the value is in the correct format.
//    - You could improve it by adding input validation and supporting values without "p".

// --- OPTIONAL ENHANCEMENT ---
// To convert this into a reusable function that accepts any pence string:
function formatPenceToPounds(penceInput) {
  if (!penceInput.endsWith("p")) {
    return "Invalid input format";
  }

  const raw = penceInput.slice(0, -1);
  const padded = raw.padStart(3, "0");
  const pounds = padded.substring(0, padded.length - 2);
  const pence = padded.substring(padded.length - 2).padEnd(2, "0");
  return `£${pounds}.${pence}`;
}

console.log(formatPenceToPounds("5p"));      // Output: £0.05
console.log(formatPenceToPounds("99p"));     // Output: £0.99
console.log(formatPenceToPounds("125p"));    // Output: £1.25
console.log(formatPenceToPounds("7"));       // Output: Invalid input format
