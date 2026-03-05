const penceString = "340210p";

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
// 1. const penceString = "399p": initializes a string variable with the value "399p"

/* 2. const penceStringWithoutTrailingP = penceString.substring(
        0,
        penceString.length - 1
      ); : this part of the code have two steps,
            - inside assigning of variable there is a function call that replace the string "399p" by "399"
            - then assigning the variable penceStringWithoutTrailingP with new string "399" */

/* 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); this initializes new string value that have
          3 character if it's less than 3 it will add "0" in front of the string.*/

/* 4.  const pounds = paddedPenceNumberString.substring(
        0,
        paddedPenceNumberString.length - 2
      );  : this part of the code assigning const pound with value of string that length is 
            reduced by -2 . */

/* 5. const pence = paddedPenceNumberString
        .substring(paddedPenceNumberString.length - 2)
        .padEnd(2, "0"); : let's break it down this code parts it have two steps first one is .substring(paddedPenceNumberString.length - 2)
                            Takes the last 2 characters of the string and the second is .padEnd(2, "0") Ensures the result 
                            is at least length 2 if the length less than 2 it will add 0 at the end of the string. */
