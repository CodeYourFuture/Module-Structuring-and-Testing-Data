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
// 1. const penceString = "399p": initialises a string variable with the value "399p",p means pence so 399p means 399 pence.

// 2.const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);Removes the trailing "p" from the string.
// .substring(0, length - 1) means: take all characters except the last one.Result: "399",which will get only the numeric part of the price.

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");Pads the numeric part from the left with zeros 
// until it's at least 3 characters long."399" stays as "399" (already 3 characters).if the number is 7, it becomes"007"
// Purpose: Ensures consistent formatting so the last two digits are always the pence and the rest are pounds.

// 4.const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);Extracts the pounds part from the padded number
//  string.For "399", this gives: .substring(0, 1) → "3".Purpose: Get everything except the last two digits, which represent the pence.

// 5.const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");Extracts the last two characters
//  (the pence part) and ensures it's exactly two digits by padding on the right if needed.For "399" → .substring(1) = "99", no padding needed
//   For "3", it becomes "03". Purpose: Make sure the pence always shows as two digits.

// 6. console.log(£${pounds}.${pence});Constructs and logs a string in the proper pounds-and-pence format, like:text  £3.99
//    Purpose: Output the final, human-readable currency value.






