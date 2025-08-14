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
// 2.Declaring the variable penceStringWithoutTrainlingP and initialising it with penceString.substring(0, penceString.length - 1) 
// in which 399 apprears without the p .The function penceString.substring(penceString.length-1 )
// removes the last character "p"
// 3. padStart(3,"0") ensures that the string "399" is at least 3 characters , adding "0" to the left if needed to get the correct format.
// 4 we declared the variable pound and used the paddedPenceNumberString.substring(0, paddedPenceNumberString.length-2) which removes the last 2 digits 
// and take the first part which is 3.
//5. const pence = paddedPenceNumberString
                 //.substring(paddedPenceNumberString.length-2)==> this extracts the last two digits which represents pence'99'
                 //.padEnd(2,"0").It made sure that if there is one digit left is adds "0" to the left side
        
 // console.log== put the string into the right format which is £3.99            
