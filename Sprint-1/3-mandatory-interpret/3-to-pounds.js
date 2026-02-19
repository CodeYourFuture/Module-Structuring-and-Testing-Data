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

// Step-by-step breakdown:

// 1. const penceString = "399p";
// Declares a string variable with the value "399p".

// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
// Removes the trailing 'p' character, resulting in "399".

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// Pads the string to at least 3 characters with leading zeros. "399" stays "399", but "5" would become "005".

// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
// Extracts all characters except the last two to get the pounds part. "399" becomes "3".

// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
// Extracts the last two characters for the pence part and pads with trailing "0" if needed.

// 6. console.log(`£${pounds}.${pence}`);
// Outputs the formatted currency: £3.99

// Question: Do we really need .padEnd(2, "0") in this script?
// No, we do not actually need .padEnd(2, "0") in this script.
// Because .padStart(3, "0") already guarantees the string has at least 3 characters,
// .substring(length - 2) will always extract exactly 2 characters for the pence part.
// For example:
//   "5p"   -> "5" -> padStart -> "005" -> pence = "05" (already 2 chars, padEnd does nothing)
//   "50p"  -> "50" -> padStart -> "050" -> pence = "50" (already 2 chars, padEnd does nothing)
//   "399p" -> "399" -> padStart -> "399" -> pence = "99" (already 2 chars, padEnd does nothing)
// So .padEnd(2, "0") is redundant here because padStart already ensures enough characters.
