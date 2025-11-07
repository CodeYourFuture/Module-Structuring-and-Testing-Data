let penceString = "399p";

let penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

let paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
let pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

let pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

// const penceString = "399p";
// Initialises a string variable with the value "399p".
// Example value now: "399p"

// const penceStringWithoutTrailingP = penceString.substring(
//  0,
//  penceString.length - 1
// );


// What it does: takes a substring of penceString from index 0 up to (but not including) penceString.length - 1.
// Why: removes the last character (the trailing "p") so we are left with just the numeric part.
// Example: "399p".substring(0, 4 - 1) → "399".
// Result stored: penceStringWithoutTrailingP === "399"

// const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");


// What it does: ensures the numeric string has at least 3 characters by adding leading "0" characters if necessary.
// Why: the subsequent logic expects at least three digits so we can safely slice off "pounds" (all but the last two digits) and "pence" (last two digits). Padding handles small values like "5p" → ensures correct indexing.
// Example: "399".padStart(3, "0") → "399" (no change). If input had been "5", .padStart(3,"0") → "005".
// Result stored: paddedPenceNumberString === "399"

// const pounds = paddedPenceNumberString.substring(
//  0,
//  paddedPenceNumberString.length - 2
// );


// What it does: takes the substring from index 0 up to (but not including) the last two characters. Those leading characters represent whole pounds.
// Why: British currency: last two digits are pence, the digits before them are pounds. This extracts the pounds portion.
// Example: "399".substring(0, 3 - 2) → "3". So pounds === "3", meaning £3.
// Note: Because of padStart(3, "0"), this always returns at least one character (for values < 100 it returns "0" or more).

// const pence = paddedPenceNumberString
//  .substring(paddedPenceNumberString.length - 2)
//  .padEnd(2, "0");


// What it does (first part): .substring(length - 2) returns the final two characters (the pence digits).
// What it does (second part): .padEnd(2, "0") ensures the result has at least two characters by adding trailing zeros if needed.
// Why: extracting the two pence digits is necessary to format £x.yy. The padEnd is defensive: if the substring somehow produced a single character (it shouldn't after the earlier padStart, but this makes the code more robust), it will ensure two digits (e.g., "5" → "50").
// Example: "399".substring(1) → "99". .padEnd(2,"0") → still "99". So pence === "99".

// console.log(`£${pounds}.${pence}`);


// What it does: prints a formatted pounds-and-pence string to the console, using template interpolation.
// Why: final user-facing representation of the price.
// Example output: £3.99

// Quick summary of the data flow (with the example "399p")

// penceString → "399p"

// remove trailing p → "399" (penceStringWithoutTrailingP)

// pad to at least 3 chars → "399" (paddedPenceNumberString)

// pounds = all but last two chars → "3"

// pence = last two chars → "99"

// printed string → £3.99

// Why some steps (like padStart / padEnd) are needed

// padStart(3, "0") ensures inputs shorter than 3 digits (e.g. "5p" or "45p") still produce correct pound/pence splitting:

// "5p" → "5" → pad → "005" → pounds = "0", pence = "05" → £0.05

// "45p" → "45" → pad → "045" → pounds = "0", pence = "45" → £0.45

// padEnd(2, "0") is defensive to guarantee two pence digits (useful if some earlier step produced one digit).

// Edge cases & small improvements

// If the input lacks the trailing "p" or contains non-digits ("£3.99", "abc") the code will produce incorrect results or unexpected output. Consider validating the string first (e.g., /^\d+p$/).

// For clarity and robustness you could parse the number then compute pounds/pence numerically:

let numericPence = parseInt(penceString.replace(/\D/g, ""), 10);
pounds = Math.floor(numericPence / 100);
pence = String(numericPence % 100).padStart(2, "0");


// This avoids fiddly substring indices and better expresses intent.

// padEnd(2, "0") after slicing the last two characters is usually unnecessary if padStart(3,"0") is present — but leaving it is harmless and defensive.

