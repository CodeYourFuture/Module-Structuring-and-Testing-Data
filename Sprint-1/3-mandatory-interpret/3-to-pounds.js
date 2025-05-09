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

//Sam

//Line 3 = penceStringWithoutTrailingP has been declared with .substring method which is applied to penceString variable. MDN :The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

// Line 4
// The first number we see here which is 0, which is the start index for a string that we provide to .substring so it knows where to start it's function from.

//Line 5
//The -1 in this line which is second part of the index aka end index is for telling .substring this is upto where it should search/extract the string. Since the number is in negative it searches for string position right to left.
//The .length expression ensures that the code is dynamic. i.e. even if the value in penceString changes to something like 39999p , this expression ensures that .substring is always extracting numeric value and excluding 'p'

//Line 8
// A new variable paddedPenceNumberString is declared and .padStart method has been used.
//.padStart(3,) ensures the string is at least 3 digits long, adding "0" at the start if needed.

//Line 9
//A new variable is Pounds is declared and .substring(startIndex, endIndex) has been used.

//Line 10
//0 - Start Index, this is where .substring will start extracting string from paddedPenceNumberString variable. Since the start index is 0 it's safe to assume this is the first character of the string.

//Line11
//-2 End Index, this is upto where .substring will extract the string. Since the value of paddedPenceNumberString is 399 , -2 end index means the middle 9 as when the index is in negative the position is counted from right to left. So we can assume the value we will that will be extracted by .substring here is 3.
//.length is used to determine the total number of characters in the string dynamically

// Line14
//Pence variable has been declared as paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");

//Line 15 .substring(paddedPenceNumberString.length - 2)
//.substring(startIndex, no endIndex) - this method with -2 index extracts the last two digits from attached variable

// Line16 .padEnd(2, "0");
//.padEnd(targetLength, padString) - this method will ensure Pence variable is always 2 digits.
