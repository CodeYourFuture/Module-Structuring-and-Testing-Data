// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceString) {
  const penceStringWithoutTrailingP = penceString.substring(
    // p is removed from the string with the sub string method.
    0,
    penceString.length - 1
    // length - 1 is used to get the index of the last character in penceString, which is p.
  );

  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  // padStart is used to ensure that the string has at least 3 characters by adding 0 at the start of the string 
  // if it is less than 3 characters long. This is important for formatting purposes, 
  // as we want to ensure that we have at least 3 digits to represent pounds and pence.
  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
    // substring is used to extract the pounds portion of the string by taking all characters except the last two, 
    // which represent pence.
  );

  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");
    // substring is used to extract the pence portion of the string by taking the last two characters.
    // padEnd is used to ensure that the pence portion has at least 2 characters by adding 0 at the end of the string 
    // if it is less than 2 characters long. This is important for formatting purposes, 
    // as we want to ensure that we have at least 2 digits to represent pence.
  return `£${pounds}.${pence}`;
  // finally, the function returns a string representing the price in pounds, 
  // formatted with a £ symbol and a decimal point separating pounds and pence.
}
console.log(toPounds("399p"));
console.log(toPounds("1p"));
console.log(toPounds("3999p"));
// above are some test cases to check if the function works correctly for different inputs. 

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
