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

console.log(paddedPenceNumberString)
console.log(pounds)
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
  

console.log(`£${pounds}.${pence}`);
console.log(pence)

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1):
// removes the p from pence string giving only 399
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): 
// adds a padded character which is 0 by 3 times at the start of PenceStringWithoutTrailP which is 399
//  and it will still remain 399 because the 3 zeros are taken up by the number
// 4. const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2): 
// This removes the two last characters of paddedPenceNumberString which is 399 to give 3
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
// This ensures that the extracted string are two characters and it extracts the last two characters
  