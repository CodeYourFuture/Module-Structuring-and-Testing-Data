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

 // 2.const penceStringWithoutTrailingP = penceString.substring( 0, penceString.length - 1);:it initializing the string from the start(index[0]) by excluding the last character therefore,the p will be excluded//399

 //3.const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): padStart makes sure that paddedPenceNumberString is three characters long//399

 //4.const pounds = paddedPenceNumberString.substring(  0, paddedPenceNumberString.length - 2):it initializing the string from the start(index[0]) by excluding the last two characters//3

 //5.const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2) .padEnd(2, "0"):two functions here 

   //the first one paddedPenceNumberString.substring(paddedPenceNumberString.length - 2) : This calculates the starting index for the substring, which is two characters from the end of the string//99
   //the second one is padEnd(2, "0") which takes the last two characters of the string//99
 //6. console.log(`£${pounds}.${pence}`): this takes the value pounds and pence to be returned.