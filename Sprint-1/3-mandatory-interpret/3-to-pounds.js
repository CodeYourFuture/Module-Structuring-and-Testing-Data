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

// To begin we start with
// const penceString = "399p";
//
// Initialises a string variable with the value "399p".
// penceString variable now store the value: "399p"

// const penceStringWithoutTrailingP = penceString.substring(
//  0,
//  penceString.length - 1
// );


// What it does: takes a substring of penceString from index 0 up to (but not including) penceString.length - 1.
// And removes the last character (the trailing "p") so we are left with just the numeric part.

// const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

// What it does: ensures the numeric string has at least 3 characters by adding leading "0" characters.
// The subsequent logic expects at least three digits so we can safely slice off "pounds" (all except the last two digits) and "pence" (last two digits). After that padding can handles small values like "5p" while maintaing correct indexing.
// Result stored: paddedPenceNumberString === "399"

// const pounds = paddedPenceNumberString.substring(
//  0,
//  paddedPenceNumberString.length - 2
// );

// What it does: takes the substring from index 0 up to (but not including) the last two characters. Those leading characters represent whole pounds.
// Note: Because of padStart(3, "0"), this always returns at least one character (for values < 100 it returns "0" or more).

// const pence = paddedPenceNumberString
//  .substring(paddedPenceNumberString.length - 2)
//  .padEnd(2, "0");

// What it does (first part): .substring(length - 2) returns the final two characters (the pence digits).
// What it does (second part): .padEnd(2, "0") ensures the result has at least two characters by adding trailing zeros if needed.
// Example: "399".substring(1) → "99". .padEnd(2,"0") → still "99". So pence === "99".

// console.log(`£${pounds}.${pence}`);

// What it does: prints a formatted pounds-and-pence string and symbol to the console, using template interpolation.
// Why: final result showing what user would expect the representation of the price.
// Example output: £3.99

let numericPence = parseInt(penceString.replace(/\D/g, ""), 10);
pounds = Math.floor(numericPence / 100);
pence = String(numericPence % 100).padStart(2, "0");

