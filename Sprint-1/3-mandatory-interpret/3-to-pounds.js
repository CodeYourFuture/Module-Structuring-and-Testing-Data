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
//********************************************************************************************************************************
2.const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);
declare constant variable penceStringWithoutTrailingP
remove p from the end of penceString variable and assign it to penceStringWithoutTrailingP .
penceStringWithoutTrailingP="399"
//********************************************************************************************************************************
3.const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
declare constant variable paddedPenceNumberString
add 0 to the beginning of the penceStringWithoutTrailingP until its length  reaches to 3 and assign it to paddedPenceNumberString
In this case add no 0 to the beggining of the string because its length is 3 already.
paddedPenceNumberString="399"
//********************************************************************************************************************************
4.const pounds = paddedPenceNumberString.substring(0,  paddedPenceNumberString.length - 2);
declare constant variable pounds
Remove the last two (char)digits from paddedPenceNumberString and assign to pounds variable and it means calculating pounds from pences
pounds=3
//********************************************************************************************************************************
5.const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
declare constant variable pence
Extract the last two (char)digits from paddedPenceNumberString  and add 0 to the end of it until its length reaches to 2 and assign it to 
variable pence
in this case : pence=99
//********************************************************************************************************************************
6.console.log(`£${pounds}.${pence}`);
call function console.log() and represent the value of pounds and pence variables with adding "£" and "." characters.
The output is :
'£3.99'

//********************************************************************************************************************************
