//Initial value of "399p" 
const penceString = "399p";

// Removes the value P from the string
  0,
  penceString.length - 1
);
3. padded value to ensure the correct numeric order
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

//Extracts pounds to leave the pence value
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

//Extracts pence  value tp leave the pounds value
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

//Combines both Pounds and Pence Values.
console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// and builds up a string representing the price in pounds.
