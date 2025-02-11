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

/*
To begin, we can start with
1. const penceString = "399p": initialises a string variable with the value "399p"
2.
3. const penceStringWithoutTrailingP = penceString.substring( : declares a variable equals to 'penceString', but without p at the end
4. substring starts from first character
5. ends on the last character before 'p'
6.
7.
8. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); : pads the string with "0" until the total length of string reaches the length 3
9. const pounds = paddedPenceNumberString.substring( : declares a variable 'pounds' equals to 'paddedPenceNumberString' but without last two digits
10. substring starts from first character
11. ends on the third character from the end.
12.
13.
14. const pence = paddedPenceNumberString:  declares a variable 'pence' equals to last two digits of 'paddedPenceNumberString'
15. returns the part of the 'paddedPenceNumberString' string from the second digit up to the end
16. pads the string with "0" in the end until the total length of string reaches the length 2
17.
18. writes in the console price in pounds
*/