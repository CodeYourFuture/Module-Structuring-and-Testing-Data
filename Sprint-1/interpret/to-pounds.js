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
3;

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  // .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2.const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
//    The substring() method her returns the part of this string from the start index up to lenght-1 => last one not inclouded then
//    initialises a string variable  assign to the  result of supStr.
// 3.const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//   initialises a string variable with value of the result of padStart this case it will
//   retun the value of three index form the started of Str =>399.
// 4.const pounds = paddedPenceNumberString.substring( 0,paddedPenceNumberString.length - 2);
//  samilar to 2 just in this case last to index not inclouded
// 5.const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
// this will finsh i 4 steps A/initialises a string variable/B- git the value (paddedPenceNumberString.length - 2 == 1)and  take us arg
//  C/ calc paddedPenceNumberString.substring(1)=="99"  and the resultof padEnd() = 99 asign tp the pence
// 5.console.log(£${pounds}.${pence});
// This line outputs the formatted price in pounds and pence using template literals.
