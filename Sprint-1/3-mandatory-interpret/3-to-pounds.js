const penceString = "399p"; // This line shows price in pence with a letter "p" attached at the end.


const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);

// Above line of code removes the "p", using "penceString.substring" function by removing the last character with "-1",
//out of a four digit string "399p".

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

// We are using "padstart" method to ensure the string contains three characters at least, 
//and if necessary to add "0" to the front.


const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2);

// We are calculating the pounds const variable by taking away the last two digits from "paddedPenceNumberString" const.

const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

//First we extracting the last two digits with "(paddedPenceNumberString.length - 2)", then making ensure the pence part
//has two digits always with "padEnd(2, "0")". Basically calculating the const pence variable. 

console.log(`£${pounds}.${pence}`);

//Uses a template literal to combine the pounds and pence values into a currency format and prints the result to the console.





// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
