const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);

const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

// 2. penceStringWithoutTrailingP the last "p" from line 1 is removed
  // substring() method will select a charactor from index 0 to -1, and return the new string "-1 is the last charactor" then we get "399"

// 3. paddedPenceNumberString  this is assingned to the variable penceStringWithoutTrailingP where a charactor is added to the beggining of the string by the method padStart
  // 3 will add 2 zeros to the begining of the string, we have padStart(3, "0") and we already have three charactor 
  // if it was padStart(4, "0") then the result was "0399"

// 4. pounds will take the paddedPenceNumberString, select all the charactors exept the last two

// 5. pence selects the values in paddedPenceNumberString, then makes sure we have the last we have two digits at the end

// console will print the output value in pounds