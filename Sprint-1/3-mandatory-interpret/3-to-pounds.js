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
 // 1. const penceString = "399p":
//    Creates a string that represents a price in pence, including the trailing "p".

// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1):
//    Removes the last character ("p") from the string.
//    Example: "399p" -> "399"

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"):
//    Ensures the numeric string has at least 3 digits by adding leading zeros.
//    This makes splitting into pounds/pence consistent.
//    Examples: "5" -> "005", "45" -> "045", "399" -> "399"

// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2):
//    Takes everything except the last two digits.
//    Those digits represent pence, so what remains is the pounds part.
//    Example: "399" -> "3"  (pounds)

// 5. const pence = paddedPenceNumberString
//        .substring(paddedPenceNumberString.length - 2)
//        .padEnd(2, "0"):
//    Takes the last two digits (the pence part).
//    padEnd(2, "0") ensures it is always two characters long.
//    Example: "399" -> last two digits "99" -> stays "99"
//    (If it were shorter, e.g. "9", it would become "90", but padStart earlier
//     usually prevents that by making the string at least 3 digits.)

// 6. console.log(`£${pounds}.${pence}`):
//    Prints the final formatted price in pounds and pence.
//    Example: pounds="3" and pence="99" -> "£3.99"
