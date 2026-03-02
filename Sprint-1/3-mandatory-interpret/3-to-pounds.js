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

//2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1): 
// removes the last character "p" from the string to get just the number part of the price in pence

//3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"):
// checks if the number is 3 digits and if it is less than 3 digits adds leading zeros to make it 3 digits long
// if it is less than 3 digits long it adds leading zeros ie if 5p it would become 005

//4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2):
// Ignores the last 2 numbers in the string (these are pence) and defines the remaining numbers as pounds.
// So if the number was 399 that would be £3.  If th number was 2050 that would be £20
// if it was 5p it would be 0

//5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"):
// takes the last 2 numbers of the string which represent the pence and if it is less than 2 digits adds trailing zeros to make it 2 digits long
// due to step 3 the string should always have at least 3 numbers but this is a safety precaution

//6. console.log(`£${pounds}.${pence}`): prints the final result in the format of £pounds.pence to the console
// prints the result £pounds.pence  so in this case £3.99  it prints the £ sign then the value of pounds 
// designated by the $ sign and the value of pence designated by the $sign