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

__________________________________**SOLUTION**____________________________________________
/*

1)   const penceString = "399p";
   Initializes a string variable named penceString with the value "399p". This string represents a price in pence (399 pence), with the "p" at the end denoting pence.
 
2)  const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);

 - Removes the trailing "p" from penceString. 
 The substring method is used here with 0 as the starting index and penceString.length - 1 (which is 3) as the ending index.

 - As a result, penceStringWithoutTrailingP will contain the string "399", which represents the numeric value of the price in pence without the "p".

3)   const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

  -Ensures that the pence value has a minimum length of 3 digits by padding the start of the string with zeros if needed. This is done to handle cases where the pence value might have fewer than 3 digits.

    For example:
   * If penceStringWithoutTrailingP were "9", it would become "009".

   * If it were "99", it would become "099".

  -Since "399" already has 3 characters, it remains "399".

4)   const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);

    * Extracts the "pounds" portion of the price by taking all but the last two characters of 
  paddedPenceNumberString.

    * Here, paddedPenceNumberString.length - 2 calculates the cutoff index, which is 1 for "399".

    * Therefore, pounds will be "3", representing the whole pounds in this amount.

5)   const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");

    * Extracts the "pence" portion of the price by taking the last two characters of 
paddedPenceNumberString. In this case, it would be "99".

    * .padEnd(2, "0") ensures that the extracted string has at least 2 digits by appending a zero if necessary. This handles cases where the pence value might have only one digit.

    *  Here, since "99" already has 2 characters, it remains "99".


6)    console.log(£${pounds}.${pence});

    * Constructs the final formatted price string in pounds and pence, in the format £X.XX.

    *  Inserts pounds (which is "3") and pence (which is "99") into the string, resulting in "£3.99".
       Prints this formatted string to the console.
*/      