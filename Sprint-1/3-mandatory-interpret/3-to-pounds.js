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
// 1. const penceString = "399p":  a string variable with the value "399p"
//2.in line 3 because the value is a string we can't do any calculation on it yet we need to convert it to a number so the first step is to get rid of the letter P at the end so no matter how long the number is we get rid of the last character.
//3. in line 8 we make sure the number has 3 digits so if needed we add zeros at the start at the number
//4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);: by taking away the last 2 digit we will get the pounds in this example the amount is 399 so by taking away the 99 we will get 3 pounds 
//6. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");: the same thing again now extracts the pence part by taking the last two digits if it is one digit we add 0 at the end to make it two digits
// in line 18 to print the result in the right format £ sign then pounds then a dot and then pence
