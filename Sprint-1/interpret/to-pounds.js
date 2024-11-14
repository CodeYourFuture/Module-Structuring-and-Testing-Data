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
  .substring(paddedPenceNumberString.length - 2).padEnd(2, "0")
  
console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initializes a string variable with the value "399p"
// 2. const penceStringWithoutTrailingP is assigned the value of penceString without the trailing p. Calling substring() on penceString and appending the .length method - 1 removes the p from 399p.
// 3. const paddedPenceNumberString is assigned a padded value of penceStringWithoutTrailingP where the function padStart has been called to generate a string of a specified length, in this case the length is 3. 
// 4. const pounds: on this line the last two digits are removed from paddedPenceNumberString by calling the substring() function to extract characters(none in this case for 0 was passed as an argument, making sure nothing else is removed) and appending the .length method - 2 (removing 99).
// 5. const pence is assigned the new value paddedPenceNumberString which is now 99 due to the .length method appended on paddedPenceNumberString where substring and padEnd functions were also called so to reach a specified length.  
// 6. Lastly the console.log function is called using interpolation (template literals) to concatenate the string variables with the pound sign and a dot.

// 7. The code still works though I've removed padEnd(). However, padEnd() is used to make sure that the resulting string is always at least two characters long. It is then necessary or helpful if you want to ensure you always have exactly two digits for the pence part. If we remove padEnd(), then pence might not be exactly two characters in some cases.
