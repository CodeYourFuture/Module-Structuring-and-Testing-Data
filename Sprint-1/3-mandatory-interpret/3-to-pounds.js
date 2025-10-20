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
//3-6.substring(start, end) extracts characters from index start up to (but not including) end. Here we use penceString.length - 1 so we take every character except the final one — removing the trailing "p".
//8. padStart(targetLength, padString) ensures the string has at least targetLength characters by adding padString at the start if needed. We padStart(3, "0") to guarantee the numeric string is at least 3 characters long so the later slicing (split into pounds and pence) works consistently for very small amounts (e.g. "5p" → "005").
//9.This extracts everything before the last two characters of paddedPenceNumberString. Those final two characters represent pence, so everything before them is the pounds portion. Using .substring(0, length - 2) is a simple way to split the numeric string into pounds and pence.
//14. .substring(paddedPenceNumberString.length - 2) with a single argument returns the substring from that start index to the end — i.e., the last two characters — which are the pence.
//.padEnd(2, "0") ensures the pence string has exactly 2 characters, padding on the right if somehow it’s shorter (defensive programming). In normal flows the substring already returns 2 characters because we earlier padStart(3, "0").
//18. console.log(`£${pounds}.${pence}`) prints the formatted price: the pound sign, the pounds portion, a dot, then the two-digit pence string.