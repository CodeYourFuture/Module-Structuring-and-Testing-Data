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
/* 2. const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1): on this statement the initialized value
 is excluding the alphabet p from  the string by using string method that return only arguments that is mention using index */

/* 3.const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): on this statement it will
 add number 0 in the front of the number in any situation if the given number less than 3 character until the length becomes 3 */

/* 4.  const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2): on this statement .substring method is used again 
          it returns the portion of the string starting at the specified index and continuing to the end in case it remove the last two number characters  */

/* 5.const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): he code first uses substring() to get 
   the last two characters of paddedPenceNumberString. Then it uses padEnd(2, "0") to make sure the resulting string is at least 2 characters long by adding
  zeros to the end if needed. Since substring() is called first, its result is passed to padEnd().    */

/* 6.console.log(`£${pounds}.${pence}`): on this statement it will print the value of pound and pence together by using template literals */
