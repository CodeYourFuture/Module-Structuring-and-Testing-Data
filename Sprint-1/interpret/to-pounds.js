const penceString = "5p";

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
//2.const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1):removes "p" at the end of pencestring and puts the rest in pencestringwithouttrailingp variable
//3.const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"):in this line, if the length of  penceStringWithoutTrailingP
//is less than 3, it adds "0" in the beginning of penceStringWithoutTrailingP untill the length equals 3
//4.const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2):omits the last 2 strings of paddedPenceNumberString
//(because they will be pences), so the rest will be pounds
//5.const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"):considers the last 2 strings
// as pences. I'm just wondering if .padEnd(2, "0") is needed here?because it already made the length of penceStringWithoutTrailingP to 3 at the beginning.  I tried these codes without this part(.padEnd(2, "0")) and I got the same result
//I would be grateful if it's being explained for me about the presence of it.
//6.console.log(`£${pounds}.${pence}`): shows the result with the format of £pounds.pence






