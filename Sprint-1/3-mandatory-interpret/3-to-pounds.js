const penceString = "399p";

//It stores the price as a string in pence.

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

//Removes the "p" from the end of the string.

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

//Makes sure the string has at least 3 digits by adding leading zeros if needed. 

const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

//Takes all the digits except the last two to get the pounds.

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

  // Takes the last two digits to get the pence.

console.log(`£${pounds}.${pence}`);

//Combines the pounds and pence into a currency format and prints it.

