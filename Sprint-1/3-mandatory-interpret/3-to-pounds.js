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
// 1. const penceString = "399p": initializes a string variable with the value "399p"


// 2: "const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1)"__ Removes the trailing "p" character.
// substring(0,penceString.length - 1) this code gets all characters except the last one. so "399p" becomes just"399". 
// 3: const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0") Ensures the pence string that has at least 3 digits, by padding it in left with "0" if needed for example: 399 stays 399 or 7 would become 007. 
// 4: const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2) Extracts the pound portion (except the last two one) __ "399"-"3"(pounds) 
// 5: const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0") Gets the last two digits as the pence part. for example: "399"__"99"(pence)
// padEnd(2, "0") ensures at least two digits for pence.__eg: "3"_"30".
// 6: console.log(`£${pounds}.${pence}`) logs the full formatted price in pounds and pence.__eg:for "399P" pounds"3" pence"99" and the result is __ "3.99"
