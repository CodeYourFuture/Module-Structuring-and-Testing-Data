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
/*  1. const penceString = "399p";: initialises a string variable with the value "399p"
    2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);: 
    I will go step by step through this line
        a.  '.length' return the length of the sting, in our case the length of the string is 3 (starting the string from 0)
            then we subtract the value by 1. Why is that?
            Because the '.substring()' is excluding the end index and we do not 'p' to show
        b.  '.substring()' is returning value from the start index up to and excluding the end index,
            in our case we start the index from 0 until 2
        c.  We assign the value to 'penceStringWithoutTrailingP' variable
      
    3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");:
        a.  '.padStart' this will add 0 if the string is less than 3 characters, otherwise keep the same string
            So in our case the sting is '339' which is already 3 characters so it will return same and assign 
            the value to 'paddedPenceNumberString'.
    4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);:
        a. is returning value from the start index up to and excluding the end index,
            in our case we start the index from 0 until 'paddedPenceNumberString.length - 2' 
            which start from zero and do not include the last 2 one. 

    5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
        a.  Here pence equal to the last two digit of paddedPenceNumberString and if the value is already 
            equal to or longer than targetLength, it is returned unchanged so in our example our value is 99 so 
            it return unchanged.

*/

