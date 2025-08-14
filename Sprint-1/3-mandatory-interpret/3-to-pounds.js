const penceString = "399p";//This line creates a string variable named penceString with the value “399p,” representing the price in pence.


const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);//This line removes the “p” character from the end of penceString. The substring method takes characters from 
  //the start up to the second-to-last character, storing the result in penceStringWithoutTrailingP.


const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");//This line ensures that penceStringWithoutTrailingP has at least three characters by adding leading zeros if necessary.
// The result is stored in paddedPenceNumberString
const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2);//This line extracts the pound portion by taking 
  //all but the last two characters from paddedPenceNumberString and stores it in pounds.

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)//This line takes the last two characters from paddedPenceNumberString to get the pence amount.
  // If the length is less than two, it pads the end with a zero. The result is stored in pence.
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);//This line logs the final formatted value in pounds and pence as £X.XX. For example, if pounds is 3 and pence is 99, the output would be £3.99.

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
